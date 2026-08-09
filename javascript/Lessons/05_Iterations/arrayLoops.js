// For of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps: key value pairs FOR unique values

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
// map.set("IN", "India");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

//Object are not iterable for {forOf loop}
// const myObj = {
//   Game1: "NFS",
//   Game2: "Minecraft",
// };

// for (const [key, value] of myObj) {
//   console.log(key, ":", value);
// }

// forin Loop
//Maps is not iterable for Forin Loop
const myObj = {
  js: "JavaScript",
  swift: "Swift by Apple",
  rb: "Ruby",
  cpp: "C++",
};

for (const key in myObj) {
  console.log(`${key} is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "swift"];

for (const key in programming) {
  console.log(programming[key]);
}
