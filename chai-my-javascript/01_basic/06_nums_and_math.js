const score = 500;
console.log(score); // 500

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// maths

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4));// 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2));// 5
console.log(Math.floor(4.9));// 4

console.log(Math.random());// 0 or 1 ni vache j value avse
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.random()*(max-min+1)+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);












