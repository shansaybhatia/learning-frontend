/*
two process of declaring constructor and literal object
constructor object is used to create multiple objects with same properties and methods
singleton object is used to create single object with properties and methods
while literal object is used to create single object with properties and methods
this keyword is used to refer to the current object
*/
// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
//object literal

const mySym = Symbol("key1");

const jsUser = {
    name: "Shansay",
    "Full Name": "Shansay Bhatia",
    [mySym]: "myKey", // symbol key
    mySym: "myKey", // string key
    age: 19,
    location: "India",
    email: "shansay@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday", "Saturday"],
}

// console.log(jsUser.name);
// console.log(jsUser["Full Name"]);
// console.log(jsUser["Location"]); //undefined because of case sensitive
// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

// jsUser.isLoggedIn = false;
// Object.freeze(jsUser); //freeze the object so that no changes can be made to it
// jsUser.email = "shansay@microsoft.com"; //this will not work because the object is frozen
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello User");
}

console.log(jsUser.greeting); // this will print the function definition
jsUser.greeting(); // this will call the function and print "Hello User"
// console.log(jsUser); // this will print the entire object with the new method added
console.log(jsUser.hasOwnProperty("name")); // this will return true because the object has the property "name"
console.log(jsUser.greeting()); // this will return undefined because the function does not return anything

jsUser.greetingNew = function () {
    console.log(`Hello ${this["Full Name"]}, welcome!`); // this will refer to the current object and print the full name of the user
}
jsUser.greetingNew(); // this will call the function and print "Hello Shansay Bhatia, welcome!"