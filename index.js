const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const shapes = {
  circle: function (color) {
    //depending on the color keyword passed in, the color will change, but the shape will remain the same
    return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${color}" />
        </svg>`;
  },
  square: function (color) {
    // creates a square with the color passed in
    return `<svg height="100" width="100">
        <rect width="100" height="100" style="fill:${color};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
  },
  triangle: function (color) {
    // triangle with the color passed in
    return `<svg height="100" width="100">
        <polygon points="50,0 100,100 0,100" style="fill:${color};stroke:black;stroke-width:3" />
        </svg>`;
  },
};

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
      console.error(error);
    } else {
      console.error("Something went wrong.");
    }
  });

const generateSVG = (answers) => {
  // Generate the SVG shape
  const shapeSvg = shapes[answers.shape](answers["shape-color"]);

  // Generate the SVG text and position it in the center
  const textSvg = text.text(answers.text, answers["text-color"]);
  const textX = 50 - (answers.text.length * 2.5); // Adjusting position for centering
  const textY = 60; // Adjusting position for centering

  // Combining the shape and text SVG elements
  return `<svg height="100" width="100">
      ${shapeSvg}
      <g transform="translate(${textX}, ${textY})">${textSvg}</g>
      </svg>`;
};

const writeToFile = (fileName, data) => {
  const examplesFolder = "examples"; 
  const filePath = path.join(examplesFolder, fileName);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Generated logo.svg.`
      );
    }
  });
};
module.exports = { shapes };