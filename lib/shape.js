class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

//Triangle class
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

//Square class
class Square extends Shape {
  render() {
    return `<rect x="50" y="42" width="200" height="200" fill="${this.color}" />`;
  }
}

//Circle class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="110" r="90" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };