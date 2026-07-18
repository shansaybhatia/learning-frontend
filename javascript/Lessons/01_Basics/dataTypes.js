"use strict"; // This directive enables strict mode, which helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables.

/*
ECMAScript is the standard that JavaScript follows, and it has evolved over time with new features and improvements. The latest version of ECMAScript is ES2024, which includes various enhancements to the language. Some of the key features introduced in ES2024 include:
 1. Top-level await: This allows developers to use the await keyword at the top level of a module, making it easier to work with asynchronous code without needing to wrap it in an async function.
 2. Private class fields and methods: This feature allows developers to define private fields and methods in classes, which cannot be accessed from outside the class, providing better encapsulation and data hiding.
 3. Logical assignment operators: These operators (&&=, ||=, ??=) provide a more concise way to perform logical operations and assignments in a single step.
 4. Numeric separators: This feature allows developers to use underscores (_) as separators in numeric literals, making them easier to read, especially for large numbers.
 5. Improved error handling: ES2024 introduces new error types and improvements to existing ones, making it easier for developers to handle errors effectively in their applications.

 Data Types in JavaScript
 JavaScript has several built-in data types, including:
 1. Primitive Data Types:
    - String: Represents textual data, enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
    - Number: Represents both integer and floating-point numbers.
    - bigint: Represents integers with arbitrary precision, allowing for numbers larger than the maximum safe integer in JavaScript.
    - Boolean: Represents logical values, either true or false.
    - Null: Represents the intentional absence of any object value, standalone value (no value or nothing or empty).
    - Undefined: Represents a variable that has been declared but not assigned a value.
    - Symbol: Represents a unique identifier, often used for object properties.
 2. Non-Primitive Data Types:
    - Object: Represents a collection of properties, where each property is a key-value pair. Objects can be created using object literals, constructors, or classes.
    - Array: A special type of object that represents an ordered collection of values, which can be of any data type. Arrays are created using square brackets ([]).
    - Function: A block of code designed to perform a particular task, which can be defined using function declarations, function expressions, or arrow functions. 
*/

let name = "Shansay Bhatia"; // String data type
let age = 25; // Number data type
let isStudent = true; // Boolean data type
let address = null; // Null data type
let phoneNumber; // Undefined data type
let uniqueId = Symbol("id"); // Symbol data type
let person = {
  // Object data type
  name: "Shansay Bhatia",
  age: 25,
  isStudent: true,
};
let numbers = [1, 2, 3, 4, 5]; // Array data type
function greet() {
  // Function data type
  console.log("Hello, " + name + "!");
}

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof address); // Output: object (null is considered an object in JavaScript)
console.log(typeof phoneNumber); // Output: undefined
console.log(typeof uniqueId); // Output: symbol
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object (arrays are considered objects in JavaScript)
console.log(typeof greet); // Output: function
