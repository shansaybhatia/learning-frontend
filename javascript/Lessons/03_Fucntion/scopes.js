// Global Scope: the values can be used inside the block too
// Block Scope: the values inside block cannot be used outside the block or globally

let a = 300;
const b = 100;

if (true) {
  a = 10;
  const b = 20;
  //   var c = 30;
  console.log("Inner: ", a);
}

console.log("Outer: ", a);
console.log(b);
// console.log(c);

function one() {
  const username = "Shansay";
  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website); give error as parent cannot access child class
  two();
}
one();

if (true) {
  const username = "Shansay";
  if (username === "Shansay") {
    const lastName = " Bhatia";
    console.log(username + lastName);
  }
  //   console.log(website);  gives error
}
// console.log(username); gives error

// Basic Function declaration
console.log(addOne(5)); // can be called before the declaration
function addOne(num) {
  return num + 1;
}

//function in Expression
// console.log(addTwo(5)); gives error
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
