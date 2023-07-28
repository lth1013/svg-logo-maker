const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

const text = {
  text: function (text, color) {
    return `<svg height="100" width="100">
        <text x="0" y="15" fill="${color}">${text}</text>
        </svg>`;
  },
};

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters to be in your SVG image.",
      name: "text",
    },
    {
      type: "input",
      message: "Enter a color for your SVG text.",
      name: "text-color",
    },
    {
      type: "input",
      message: "Enter Circle Square or Triangle for your SVG image.",
      name: "shape",
    },
    {
      type: "input",
      message: "Enter the shape color for your SVG image.",
      name: "shape-color",
    },
  ])
  .then((answers) => {
    writeToFile("logo.svg", generateSVG(answers));
  })
  .catch((error) => {
    if (error) {
    } else {
    }
  });

const generateSVG = (answers) => {
  return `${shapes[answers.shape](answers["shape-color"])}
    ${text.text(answers.text, answers["text-color"])}`;
};

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
};
