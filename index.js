const counterObject = require("./myScript.js");

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./myScript.js");

console.log(newCounterObject.getCounter());
