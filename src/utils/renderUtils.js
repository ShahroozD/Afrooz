
import * as fs from "fs";
import path from "path";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

export const renderPage = (Component, outputFilePath) => {
  try {
    const html = ReactDOMServer.renderToStaticMarkup(<Component />);
    const htmlWithDoc = "<!DOCTYPE html>" + html;
    const prettyHtml = prettier.format(htmlWithDoc, { parser: "html" });

    // Ensure the output directory exists
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, prettyHtml);
    console.log(`Rendered and saved to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error rendering page: ${error.message}`);
  }
};
