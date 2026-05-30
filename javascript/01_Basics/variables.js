const accId = 123456789; //const is block-scoped and cannot be updated or redeclared, making it a good choice for variables that should not change value after being assigned.
let accMail = "Shansay@google.com"; //let is block-scoped and can be updated but not redeclared, making it a good choice for variables that may change value but should not be redeclared.
var accPassword = "Shansay@123"; //var is function-scoped and can be redeclared and updated, but it is generally recommended to use let or const for better readability and maintainability of code.
let accountState; // This variable is declared but not initialized, so it will have the value of undefined until it is assigned a value.

accCity = "New York"; // This is allowed since accCity is declared without var, let, or const (not recommended)

// accId = 329392; // This will cause an error since accId is a constant

accMail = "shansay@outlook.com"; // This is allowed since accMail is declared with let
accPassword = "Shansay@456"; // This is allowed since accPassword is declared with var
accCity = "Los Angeles"; // This is allowed since accCity is declared without var, let, or const (not recommended)

console.log(accId);
console.log(accMail);
console.log(accPassword);
console.log(accCity);

console.table([accId, accMail, accPassword, accCity, accountState]);
//[] and {} are used to create arrays and objects respectively. In this case, we are creating an array with the values of accId, accMail, accPassword, and accCity and then displaying it in a table format in the console.
