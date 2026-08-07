//IF

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("Logged In");
} else {
  console.log("Error 404");
}

//   Implicit Scope
const balance = 1000;
// if (balance > 500)
//   (console.log("Minimum Balance available!"), console.log("TEST2"));

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 700) {
  console.log("Less than 700");
} else if (balance < 1000) {
  console.log("balance is less than 1000");
} else {
  console.log("Minimum Balance available!");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 1) {
  console.log("Allowed to but course!");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User Logged In");
}
