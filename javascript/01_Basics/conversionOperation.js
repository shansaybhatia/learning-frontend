// Type conversion in JavaScript
// Type conversion, also known as type coercion, is the process of converting a value from one data type to another. In JavaScript, this can happen implicitly (automatically) or explicitly (manually).

let score = "33abc"; // This is a string that contains both numbers and letters
console.log(typeof score);
let valueNumber = Number(score);
console.log(typeof valueNumber);
console.log(valueNumber); // The Number() function attempts to convert the string "33abc" to a number. Since it contains non-numeric characters, the conversion fails and results in NaN (Not-a-Number).

let valueString = String(score);
console.log(typeof valueString);
console.log(valueString); // The String() function converts the value of score to a string, which is already a string, so it remains unchanged.

let num1 = 10;
let num2 = "20";
let sum = num1 + num2; // This will result in string concatenation, not numeric addition, because num2 is a string.
console.log(sum); // Output: "1020"
let num3 = 10;
let num4 = "20";
let sum2 = num3 + Number(num4); // This will convert num4 to a number before performing the addition, resulting in numeric addition.
console.log(sum2); // Output: 30

let num = null;
console.log(typeof num); // Output: object (null is considered an object in JavaScript)
let valueNum = Number(num);
console.log(typeof valueNum);
console.log(valueNum); // Output: 0

let bool = true;
console.log(typeof bool); // Output: boolean
let valueBool = Number(bool);
console.log(typeof valueBool);
console.log(valueBool); // Output: 1 (true is converted to 1, while false would be converted to 0)

let bool2 = false;
console.log(typeof bool2); // Output: boolean
let valueBool2 = Number(bool2);
console.log(typeof valueBool2);
console.log(valueBool2); // Output: 0 (false is converted to 0)

let str = "Hello";
console.log(typeof str);
let valueStr = Boolean(str);
console.log(typeof valueStr);
console.log(valueStr); // Output: true (non-empty strings are considered truthy, while an empty string "" would be considered falsy and converted to false)

let emptyStr = "";
console.log(typeof emptyStr);
let valueEmptyStr = Boolean(emptyStr);
console.log(typeof valueEmptyStr);
console.log(valueEmptyStr); // Output: false (empty strings are considered falsy and converted to false)

let num5 = 0;
console.log(typeof num5);
let valueNum5 = Boolean(num5);
console.log(typeof valueNum5);
console.log(valueNum5); // Output: false (the number 0 is considered falsy and converted to false)

let num6 = 1;
console.log(typeof num6);
let valueNum6 = Boolean(num6);
console.log(typeof valueNum6);
console.log(valueNum6); // Output: true (any non-zero number is considered truthy and converted to true)

let score2 = undefined;
console.log(typeof score2);
let valueScore2 = Number(score2);
console.log(typeof valueScore2);
console.log(valueScore2); // Output: NaN (undefined cannot be converted to a number, resulting in NaN)
