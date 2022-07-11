#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const component = require("./templates/component");
const viewController = require("./templates/view-controller");
const view = require("./templates/view");
const indexTemplate = require("./templates/index-template");
const testController = require("./templates/test-controller");
const testView = require("./templates/test-view");

const options = yargs.usage("Usage: --dir <dirname> --c <name>").option("dir", { alias: "dirname", describe: "Directory name", type: "string" }).option("c", { alias: "component", describe: "Component name", type: "string", demandOption: true }).argv;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function insertSpaces(string) {
  string = string.replace(/([a-z])([A-Z])/g, "$1-$2");
  string = string.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2");
  return string;
}

const componentName = capitalizeFirstLetter(options.c);
const componentFileName = insertSpaces(options.c).toLowerCase();

const FINAL_DIR = path.join(options.dir || ".", componentFileName);
const TEST_FILE_PATH = path.join(FINAL_DIR, "__test__");

/**
 * Function to create the root folder
 */
if (!fs.existsSync(FINAL_DIR)) {
  fs.mkdirSync(FINAL_DIR, { recursive: true });
}

/**
 * Function to create the __test__ folder
 */
if (!fs.existsSync(TEST_FILE_PATH)) {
  fs.mkdirSync(TEST_FILE_PATH, { recursive: true });
}

fs.writeFileSync(path.join(FINAL_DIR, `${componentFileName}-view-controller.tsx`), viewController(componentName));

fs.writeFileSync(path.join(FINAL_DIR, `${componentFileName}-view.tsx`), view(componentName));

fs.writeFileSync(path.join(FINAL_DIR, `${componentFileName}.tsx`), component(componentName, componentFileName));

fs.writeFileSync(path.join(FINAL_DIR, `index.tsx`), indexTemplate(componentName, componentFileName));

fs.writeFileSync(path.join(TEST_FILE_PATH, `${componentFileName}-view-controller.test.tsx`), testController(componentName, componentFileName));

fs.writeFileSync(path.join(TEST_FILE_PATH, `${componentFileName}-view.test.tsx`), testView(componentName, componentFileName));

console.log("🚀 Component created");
