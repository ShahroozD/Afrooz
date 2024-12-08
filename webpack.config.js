const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');

// Helper to dynamically generate entries based on `render.jsx` files
function getEntries(baseDir) {
  const entries = {};
  const findRenderFiles = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.resolve(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findRenderFiles(fullPath); // Recursively search directories
      } else if (file === 'render.js') {
        const name = path.relative(baseDir, path.dirname(fullPath)); // Use folder name as entry key
        entries[name] = fullPath;
      }
    });
  };

  findRenderFiles(baseDir);
  return entries;
}

const entries = getEntries('./src/Pages');

module.exports = {
  entry: entries,
  mode: "development",
  target: 'node',
  output: {
    filename: '[name]-render.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      { 
        test: /\.(png|jpg|gif)$/,
        use: [
            {
              loader: 'file-loader',
              options: {
                name: '../public/imgs/[name].[ext]',
                esModule: false,
              }
            }
          ] 
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../public/css/[name].css",
      chunkFilename: "[id].css"
    })
  ],
};

