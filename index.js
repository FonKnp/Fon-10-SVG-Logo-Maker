const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shape");

const promptUser = () => {
  const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What is your text color? (keyword or hex)",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like?",
      choices: ["Square", "Circle", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What is your shape color? (keyword or hex)",
    },
  ];
  inquirer.prompt(questions);
};

promptUser();
