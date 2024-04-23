const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shape");

// function write SVG file 
function writeToFile(fileName, data) {
  try {
      fs.writeFileSync(fileName, data);
      console.log('You have successfully generated your logo.svg file!');
  } catch (error) {
      console.error('Error writing to file:', error);
  }
}

class logo {
  constructor() {
      this.shapeChoice = '';
      this.textChoice = '';
  }

  render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeChoice}${this.textChoice}</svg>`;
  }

  setShapeChoice(shape) {
      this.shapeChoice = shape.render();
  }

  setTextChoice(text, color) {
      this.textChoice = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
}

async function promptUser(questions) {
  return inquirer.prompt(questions);
}

async function init() {
  const questions = [
      { 
        type: 'input',
        name: 'text', 
        message: 'What characters you like for your logo? (Enter up to three characters)' 
      },
      { 
        type: 'input', 
        name: 'textColor', 
        message: 'Enter a color for the text using a color keyword or a hexadecimal number' },
      { 
        type: 'list', 
        name: 'shape',
        message: 'Which shape would you like your logo to be?', 
        choices: ['Triangle', 'Square', 'Circle'] 
      },
      { 
        type: 'input', 
        name: 'shapeColor', 
        message: 'Enter a color for the shape using a color keyword or a hexadecimal number' 
      }
  ];

  const responses = await promptUser(questions);
  const { text, textColor, shape, shapeColor } = responses;

  console.log(`Logo Text: [${text}]`);
  console.log(`Logo Text Color: [${textColor}]`);
  console.log(`You Chose This Shape: [${shape}]`);
  console.log(`Shape Color: [${shapeColor}]`);

  let pickShape;

  switch (shape) {
      case 'Square':
          pickShape = new Square();
          console.log('You have chosen Square as your shape!');
          break;
      case 'Triangle':
          pickShape = new Triangle();
          console.log('You have chosen Triangle as your shape!');
          break;
      case 'Circle':
          pickShape = new Circle();
          console.log('You have chosen Circle as your shape!');
          break;
      default:
          console.log('Invalid shape choice!');
          return;
  }

  pickShape.setColor(shapeColor);

  const svg = new logo();
  svg.setTextChoice(text, textColor);
  svg.setShapeChoice(pickShape);
  const svgString = svg.render();

  console.log('Creating your custom SVG logo file...');
  writeToFile('logo.svg', svgString);
}

init();