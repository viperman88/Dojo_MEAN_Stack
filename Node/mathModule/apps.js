const MathModule = require("./mathlib");
const math = new MathModule();
const a = 5;
const b = 30;
console.log(`The sum of ${a} and ${b} is: ${math.add(a, b)}`);
console.log(`The product of ${a} and ${b} is: ${math.multiply(a, b)}`);
console.log(`${b} squared is: ${math.square(a)}`);
console.log(`Here is a random number between ${a} and ${b}: ${math.random(a, b)}`);
