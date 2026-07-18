// Immediately Invoked Function Expressions (IIFE)
// used to immediately invoke the function; eg: if we want to use function without any intervention of global scoped pollutions

// First paranthesis for function defination while second is function call
(function iife() {
  // Named iife
  console.log("Database Connected");
})();
// always use semicolon to end the iife code {to break the context}

((name) => {
  // Unnamed iife
  console.log(`Server Connected for ${name}`);
})("Shansay");
