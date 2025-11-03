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

class Circle extends Shape
{
    constructor(radius)
    {
        super("Circle", 0);
        this.radius = radius;
    }

    draw()
    {
        console.log(`Drawing a circle with radius ${this.radius}.`);
    }
}

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

const shape = new Shape("Generic Shape", 5);
const circle = new Circle(10);
const square = new Square(6);

shape.draw();
circle.draw();
square.draw();