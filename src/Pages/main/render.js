import path from "path";
import { renderPage } from "../../utils/renderUtils"; // Adjust the path based on your folder structure
import { resolveFromRoot } from "../../utils/pathHelpers";
import Page from ".";

// Derive folder name from the current file name
const scriptName = path.basename(__filename, '-render.js'); // Strip "-render.js"
const folderName = scriptName;

// Construct the output path dynamically
const outputPath = resolveFromRoot("public", `${folderName}.html`);

// Render the page
renderPage(Page, outputPath);