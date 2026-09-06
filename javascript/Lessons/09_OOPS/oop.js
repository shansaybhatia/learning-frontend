const User = {
  username: "Shansay",
  loginCount: "7",
  signedIn: "true",

  getUserDetails: function () {
    // return this;
    return `userName: ${this.username}`;
  },
};
// console.log(User.getUserDetails());

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new user("Shansay", "11", "true"); // "new" keyword creates empty object which is called instance
//Constructor Function is called due to "new" keyword
//All the arguments gets injects in "this" keyword
const userTwo = new user("Hitesh", "1", "false");
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo instanceof user);
