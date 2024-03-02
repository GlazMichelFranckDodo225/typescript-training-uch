import { Circle } from "./Circle";
import { Shape } from "./Shape";

let myShape: Shape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle: Circle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());
