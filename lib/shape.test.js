const { Triangle, Square, Circle } = require('./shape');

describe('Triangle', () => {
  it('should render a triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
  })
});

describe('Square', () => {
  it('should jest"r a square', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="50" y="42" width="200" height="200" fill="red" />')
  })
});

describe('Circle', () => {
  it('should render a circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="110" r="90" fill="red" />')
  })
});