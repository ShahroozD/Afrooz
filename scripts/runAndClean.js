const fs = require("fs").promises;
const path = require("path");
const rimraf = require("rimraf");

// Base directories
const distDir = path.resolve(__dirname, "../dist");

// Helper to find render scripts
async function getRenderScripts() {
  const files = await fs.readdir(distDir);
  return files.filter((file) => file.endsWith("-render.js"));
}

// Execute all render scripts and clean up
async function runAndClean() {
  try {
    const renderScripts = await getRenderScripts();
    
    // Dynamically require and execute each script
    renderScripts.forEach((script) => {
      require(path.join(distDir, script));
      console.log(`Executed: ${script}`);
    });

    // Clean up the dist directory
    rimraf.sync(distDir);
    console.log(`${distDir} directory removed.`);
  } catch (err) {
    console.error("Error during execution and cleanup:", err);
  }
}

runAndClean();
