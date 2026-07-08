function myName() {
  console.log("Shansay Bhatia");
}
myName();

// function addTwoNums(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNums(6, 5);
// console.log(result); // gives copy of the code and not the returned value

function addTwoNums(num1, num2) {
  return num1 + num2;
  console.log("Added Nums"); // will not execute as return is the end of function
}
const result = addTwoNums(6, 5);
console.log(result);

function loginUser(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUser()); //undefined
console.log(loginUser("Shansay"));

