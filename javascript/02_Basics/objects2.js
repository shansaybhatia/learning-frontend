const user = new Object(); // Singleton Object

// const User1 = {}; // Non singleton object
// console.log(User1);

user.id = "1";
user.name = "Shansay Bhatia";
user.isLoggedIn = true;
// console.log(user);

const regularUser = {
  email: "shansay@example.com",
  fullName: {
    userFullName: {
      firstName: "Shansay",
      lastName: "Bhatia",
    },
  },
};

console.log(regularUser.fullName);
console.log(regularUser.fullName?.userFullName); // '?' used as a protection {if else basically}

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2); // {} acts as a target and rest acts as source

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const Users = [
  {
    id: 1,
    email: "test@gmail.com",
  },
  {
    id: 2,
    email: "test2@gmail.com",
  },
];

console.log(Users[1].email);

console.log(Object.keys(user)); // Gives array as a data type
console.log(Object.values(user));
console.log(Object.entries(user)); // Gives array of key:value pair in array
