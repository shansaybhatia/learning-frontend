let response: any = "42";
let numericLength: number = (response as string).length;

// type assertion
type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

// let value: any;
// value = "tea";
// value = [1, 2, 3];
// value = 2.5;
// value.toUpperCase(); didn't give any error as the type is any

let newValue: unknown;
newValue = "tea";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("ERROR", error);
}

type Role = "admin" | "user" | "superadmin";
function redirectBasedRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
