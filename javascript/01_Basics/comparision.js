// Comparison Operators

// Equality (==) and Strict Equality (===)
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (no type coercion)
// Inequality (!=) and Strict Inequality (!==)
console.log(5 != "5"); // false (type coercion)
console.log(5 !== "5"); // true (no type coercion)
// Greater than (>) and Less than (<)
console.log(10 > 5); // true
console.log(5 < 10); // true
// Greater than or equal to (>=) and Less than or equal to (<=)
console.log(10 >= 10); // true
console.log(5 <= 10); // true
// Logical Operators
// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
// OR (||)
console.log(true || false); // true
console.log(false || false); // false
// NOT (!)
console.log(!true); // false
console.log(!false); // true

console.log(null >= 0); // true (null is converted to 0)
console.log(null == 0); // false (null is only equal to undefined) == and >= behave differently with null
console.log(undefined >= 0); // false (undefined is converted to NaN)
