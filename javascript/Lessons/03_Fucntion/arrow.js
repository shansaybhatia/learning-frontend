const user = {
  name: "Shansay",
  age: 19,

  welcomeMessage: function () {
    console.log(`${this.name} welcome to the website`);
    // here this keyword works as current context i.e. if the name changes it will also change.
    console.log(this);
  },
};

// user.welcomeMessage();
// user.name = "Nauva";
// user.welcomeMessage();

// console.log(this);

/*
function one() {
  username: "Shansay";
  console.log(this.username); //didn't work for functions
}
one();
*/

/* Arrow function */
const one = () => {
  username: "Shansay";
  console.log(this);
};
one();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 2));

/* Implicit return */
// const subTwo = (num1, num2) => num1 - num2;
// console.log(subTwo(2, 2));
const subTwo = (num1, num2) => ({ username: "Shansay" });
console.log(subTwo());
