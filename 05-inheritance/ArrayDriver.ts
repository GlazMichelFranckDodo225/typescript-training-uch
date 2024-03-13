import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape: Shape = new Shape(10, 15);
let myCircle: Circle = new Circle(5, 10, 20);
let myRectangle: Rectangle = new Rectangle(0, 0, 3, 7);

// Array of Shapes Initially Empty
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

// Error => Argument of type 'string' is not assignable 
// to parameter of type 'Shape'
// shapes.push("Will This Works ?");
// shapes.push(1258);

for(let shape of shapes) {
    console.log(shape.getInfo());
}