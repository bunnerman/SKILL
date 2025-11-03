// Parent Class
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  draw() {
    console.log(`Drawing a generic shape named ${this.name} with color ${this.color}.`);
  }
}

// Child Class: Circle
class Circle extends Shape {
  constructor(color, radius) {
    super("Circle", color); // call parent constructor
    this.radius = radius;
  }

  // Override draw() method
  draw() {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}.`);
  }
}

// Child Class: Square
class Square extends Shape {
  constructor(color, sideLength) {
    super("Square", color); // call parent constructor
    this.sideLength = sideLength;
  }

  // Override draw() method
  draw() {
    console.log(`Drawing a ${this.color} square with side length ${this.sideLength}.`);
  }
}

// Example Usage
const shape = new Shape("Generic Shape", "black");
const circle = new Circle("red", 5);
const square = new Square("blue", 4);

shape.draw();   // Drawing a generic shape named Generic Shape with color black.
circle.draw();  // Drawing a red circle with radius 5.
square.draw();  // Drawing a blue square with side length 4.