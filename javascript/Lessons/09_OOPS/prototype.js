// let myName = "Shansay    "
// let mychannel = "Bhatia     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Shansay = function () {
  console.log(`Shansay is present in all objects`);
};

Array.prototype.heyShansay = function () {
  console.log(`Shansay says hello`);
};

heroPower.Shansay();
myHeros.Shansay();
myHeros.heyShansay();
// heroPower.heyShansay()

// // inheritance
// const User = {
//   name: "Shansay",
//   email: "shansay@google.com",
// };

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User;

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Shansay    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Bhatia".trueLength();
"icedTea".trueLength();
