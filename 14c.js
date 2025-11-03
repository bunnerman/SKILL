// Parent Class
class Shape
{
    constructor(name, sides)
    {
        this.name = name;
        this.sides = sides;
    }

    draw()
    {
        console.log(`Drawing a generic shape named ${this.name} with ${this.sides} sides.`);
    }
}

// Child Class: Circle
class Circle extends Shape
{
    constructor(radius)
    {
        // A circle is considered to have 0 sides in this context
        super("Circle", 0);
        this.radius = radius;
    }

    draw()
    {
        console.log(`Drawing a circle with radius ${this.radius}.`);
    }
}

// Child Class: Square
class Square extends Shape
{
    constructor(sideLength)
    {
        super("Square", 4);
        this.sideLength = sideLength;
    }

    draw()
    {
        console.log(`Drawing a square with ${this.sides} sides, each of length ${this.sideLength}.`);
    }
}

// Example Usage
const shape = new Shape("Generic Shape", 5);
const circle = new Circle(10);
const square = new Square(6);

shape.draw();   // Drawing a generic shape named Generic Shape with 5 sides.
circle.draw();  // Drawing a circle with radius 10.
square.draw();  // Drawing a square with 4 sides, each of length 6.