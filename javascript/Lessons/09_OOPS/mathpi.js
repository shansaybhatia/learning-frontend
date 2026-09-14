const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const myObj = {
  name: "Iced Tea",
  price: 60,
  isAvailable: true,
  orderTea: function () {
    console.log("Out of stock!");
  },
};

console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

Object.defineProperty(myObj, "name", {
  // writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (let [key, value] of Object.entries(myObj)) {
  if (typeof value != "function") {
    console.log(`${key}: ${value}`);
  }
}
