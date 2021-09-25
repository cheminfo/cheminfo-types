const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
import * as TJS from "typescript-json-schema";
import { resolve } from "path";
// Get document, or throw exception on error
const doc = yaml.load(fs.readFileSync(path.join(__dirname, "index.yml"), "utf8"));
const settings: TJS.PartialArgs = {
  required: true,
  titles: true,
  defaultProps: true,
};
// optionally pass ts compiler options
const compilerOptions = {
  strictNullChecks: true,
};

try {
  doc.forEach((tsFile: any) => {
    let filename = Object.keys(tsFile)[0];
    let program = TJS.getProgramFromFiles(
      [resolve(filename)],
      compilerOptions,
      "../ts"
    );
    let newPath = filename.replace(".d.ts", ".json").replace("src", "json");
    let values: Array<string> = Object.values(tsFile);
    values.forEach((value) => {
      let schema = TJS.generateSchema(program, value, settings);
      console.log(schema);
      fs.writeFileSync(newPath, JSON.stringify(schema));
    });
  });
} catch (err) {
  console.log(err);
}