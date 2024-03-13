"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// Array of Shapes Initially Empty
let shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
// Error => Argument of type 'string' is not assignable 
// to parameter of type 'Shape'
// shapes.push("Will This Works ?");
// shapes.push(1258);
for (let shape of shapes) {
    console.log(shape.getInfo());
}
