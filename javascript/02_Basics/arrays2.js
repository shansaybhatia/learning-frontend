const marvelHeroes = ["Captain America", "Iron Man"];
const dcHeroes = ["Superman", "Batman"];

// marvelHeroes.push(dcHeroes); // Adds the entire dcHeroes array as a single element to the end of existing marvelHeroes array
// console.log(marvelHeroes);
// console.log(marvelHeroes[2][0]); // Accessing the first element of the dcHeroes array within marvelHeroes, which is "Superman"

// const allHeroes = marvelHeroes.concat(dcHeroes); // Merges both arrays into a new array
// console.log(allHeroes);

// Spread operator
const allHeroes2 = [...marvelHeroes, ...dcHeroes]; // Merges both arrays into a new array using the spread operator
console.log(allHeroes2);

const myArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]; // Nested array
const flatArr = myArr.flat(Infinity); // Flattens the nested array into a single-level array
console.log(flatArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray("Shansay")); // false
console.log(Array.from("Shansay")); // ["S", "h", "a", "n", "s", "a", "y"]
console.log(Array.from({ name: "Shansay" })); //empty array because the object doesn't have a length property
console.log(Array.from({ length: 5 }, (_, index) => index + 1)); // [1, 2, 3, 4, 5]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
