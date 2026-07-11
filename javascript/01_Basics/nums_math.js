const num = 100;
console.log(num);

const balance = new Number(500);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const pi = 3.14159;
console.log(pi.toPrecision(3));
// precision is the total number of digits, including those before and after the decimal point.
console.log(pi.toExponential(2));
// exponential notation with 2 digits after the decimal point.

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN")); // Output: "1,00,00,000" (Indian numbering system)

// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3)); // 2 raised to the power of 3
console.log(Math.round(3.7));
console.log(Math.floor(3.7));
console.log(Math.ceil(3.3));
console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));
console.log(Math.random()); // 0 and 1
console.log(Math.random() * 100); // 0 and 100
console.log(Math.floor(Math.random() * 100 + 1)); // 1 and 100

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Random number between 10 and 20 (inclusive) x
