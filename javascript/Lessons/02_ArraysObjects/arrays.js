const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr[0]); // 1

// const myArr2 = ["Shansay", "Ashvas", 11];

// myArr2.push(3); // Adds 3 to the end of the array
// console.log(myArr2); // ["Shansay", "Ashvas", 11, 3]

// myArr.pop(); // Removes the last element from the array
// console.log(myArr);

// myArr.unshift(0); // Adds 0 to the beginning of the array
// console.log(myArr);

// myArr.shift(); // Removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(5)); // true
// console.log(myArr.indexOf(10)); // -1 i.e. 10 is not present in the array, so it returns -1

// const newArr = myArr.join(); // Joins all the elements of the array into a string
// console.log(typeof newArr); // string
// console.log(myArr);
// console.log(newArr);

console.log("A", myArr);

const newArr1 = myArr.slice(0, 5); // Creates a new array with elements from index 0 to 4
console.log(newArr1); // [1, 2, 3, 4, 5]
console.log("B", myArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr2 = myArr.splice(0, 5); // Removes elements from index 0 to 4 and returns them as a new array
console.log(newArr2); // [1, 2, 3, 4, 5]
console.log("C", myArr); // [6, 7, 8, 9, 10]
