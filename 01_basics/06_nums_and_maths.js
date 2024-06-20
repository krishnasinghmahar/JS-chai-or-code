const score = 400
const balance = new Number(100)

// console.log(score);
// console.log(balance);

// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 123.943;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// ++++++++++++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.5))
// console.log(Math.min(4, 5, 6, 7))
// console.log(Math.max(4, 5, 6, 7))

// console.log(Math.random())
// console.log((Math.random() * 10) + 1)
// console.log(Math.random(Math.random() * 10) + 1)

const min = 10;
const max = 20;

const number = Math.floor(Math.random() * (max - min + 1) + min)
console.log(number)