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

function calculateCartPrice(val1, ...val2) {
  //rest operator in function
  return val2;
}

console.log(calculateCartPrice(21, 142, 2413, 1214));

const item = {
  name: "Apple",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Item name is ${anyObject.name} and it's price is ${anyObject.price}`,
  );
}

handleObject(item);

handleObject({
  name: "Banana",
  price: 60,
});

const myArr = [1, 2, 3, 4, 5];
function getSecondValue(getArr) {
  return getArr[1];
}
console.log(getSecondValue(myArr));
