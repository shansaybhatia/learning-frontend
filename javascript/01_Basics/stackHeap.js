// Stack {primmitive values, function calls, etc.}
// Heap {objects, arrays, etc.}

// Stack is a data structure that follows the Last In First Out (LIFO) principle. It is used to store primitive values, function calls, and other simple data types. When a function is called, a new stack frame is created to hold the function's local variables and parameters. Once the function execution is complete, the stack frame is removed from the stack. it creates a copy of the value and stores it in the stack. When a function is called, a new stack frame is created to hold the function's local variables and parameters. Once the function execution is complete, the stack frame is removed from the stack.

// Example of stack in JavaScript
let myName = "Shansay"; // This variable is stored in the stack
let anotherName = "Ashvas"; // anotherName is a copy of myName and is also stored in the stack {this dont change the original value of myName, it creates a new copy of the value and stores it in the stack}
console.log(myName);
console.log(anotherName);

// Heap is a data structure that is used to store complex data types like objects and arrays. Unlike the stack, the heap does not follow any specific principle for data storage and retrieval. It allows for dynamic memory allocation, meaning that memory can be allocated and deallocated as needed during the program's execution. When an object or array is created, it is stored in the heap, and a reference to that memory location is stored in the stack. This allows for efficient memory management and enables the use of complex data structures in JavaScript.

// Example of stack and heap in JavaScript
let userOne = {
  name: "Shansay",
  age: 25,
}; // This object is stored in the heap, and a reference to it is stored in the stack

let userTwo = userOne; // userTwo is a reference to the same object in the heap, and it is also stored in the stack
userTwo.name = "Ashvas"; // Modifying the name property of userTwo will also affect userOne since they reference the same object in the heap
console.log(userOne);
console.log(userTwo);
