const name = "Shansay";
const surname = "Bhatia";
console.log(name + " " + surname); // Output: Shansay Bhatia

// Template literals (introduced in ES6) provide a more convenient way to create strings and include variables.
console.log(`Hello my name is ${name} ${surname}`); // Output: Shansay Bhatia

const gameName = new String("Chess");
console.log(gameName[0]);
console.log(gameName.__proto__); // Output: String.prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));
console.log(gameName.slice(1, 4));
// can pass negative index to slice method
console.log(gameName.slice(-4, -1)); // Output: "hes"
const newString = gameName.substring(0, 4);
console.log(newString); // Output: "hes"

const str1 = "  Hello World!   ";
console.log(str1.trim()); // Output: "Hello World!"
console.log(str1.trimStart()); // Output: "Hello World!   "
console.log(str1.trimEnd()); // Output: "  Hello World!"

const str2 = "JavaScript is awesome!";
console.log(str2.includes("awesome")); // Output: true
console.log(str2.startsWith("Java")); // Output: true
console.log(str2.endsWith("!")); // Output: true

const url = "https://www.shansay.com/shansay%20bhatia";
console.log(url.replace("%20", "-")); // Output: "https://www.shansay.com/shansay-bhatia"

const str3 = "Hello World!";
console.log(str3.split(" ")); // Output: ["Hello", "World!"]
const str4 = "Shansay-Bhatia-18-UPES";
console.log(str4.split("-")); // Output: ["Shansay", "Bhatia", "18", "UPES"]

//String immutability
let str5 = "Hello";
str5[0] = "h";
console.log(str5); // Output: "Hello" (string is immutable, so it remains unchanged)

/* All string Methods:
1. charAt() - returns the character at a specified index in a string.
2. charCodeAt() - returns the Unicode value of the character at a specified index in a string.
3. concat() - concatenates two or more strings and returns a new string.
4. endsWith() - checks if a string ends with a specified substring and returns true or false.
5. includes() - checks if a string contains a specified substring and returns true or false.
6. indexOf() - returns the index of the first occurrence of a specified substring in a string, or -1 if it is not found.
7. lastIndexOf() - returns the index of the last occurrence of a specified substring in a string, or -1 if it is not found.
8. match() - retrieves the matches when matching a string against a regular expression, and returns the matches as an array. If there is no match, it returns null.
9. repeat() - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
10. search() - executes a search for a match between a regular expression and this String object, and returns the index of the first match, or -1 if no match was found.
11. blink() - causes the text to blink (not supported in all browsers).
12. bold() - causes the text to be displayed in bold (not supported in all browsers).
13. fixed() - causes the text to be displayed in a fixed-width font (not supported in all browsers).
14. fontcolor() - causes the text to be displayed in a specified color (not supported in all browsers).
15. fontsize() - causes the text to be displayed in a specified size (not supported in all browsers).
16. italics() - causes the text to be displayed in italics (not supported in all browsers).
17. link() - causes the text to be displayed as a hyperlink (not supported in all browsers).
18. small() - causes the text to be displayed in a smaller font size (not supported in all browsers).
19. strike() - causes the text to be displayed with a strikethrough (not supported in all browsers).
20. sub() - causes the text to be displayed as subscript (not supported in all browsers).
21. sup() - causes the text to be displayed as superscript (not supported in all browsers).
22. anchor() - causes the text to be displayed as an anchor (not supported in all browsers).
23. big() - causes the text to be displayed in a larger font size (not supported in all browsers).
24. codepointAt() - returns the Unicode code point value of the character at a specified index in a string.
25. trim() - removes whitespace from both ends of a string and returns a new string.
26. trimStart() - removes whitespace from the beginning of a string and returns a new string.
27. trimEnd() - removes whitespace from the end of a string and returns a new string.
28. padStart() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
29. padEnd() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
30. toUpperCase() - returns the calling string value converted to uppercase.
31. toLowerCase() - returns the calling string value converted to lowercase.
32. toLocaleUpperCase() - returns the calling string value converted to uppercase, according to any locale-specific case mappings.
33. toLocaleLowerCase() - returns the calling string value converted to lowercase, according to any locale-specific case mappings.
34. toString() - returns a string representing the specified object.
35. valueOf() - returns the primitive value of a String object.
*/
