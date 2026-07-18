// let myDate = new Date();
// console.log(myDate); // Output: current date and time
// console.log(myDate.toString()); // Output: current date and time in string format
// console.log(myDate.toDateString()); // Output: current date in string format
// console.log(myDate.toTimeString()); // Output: current time in string format
// console.log(myDate.toLocaleString()); // Output: current date and time in string format based on the user's locale
// console.log(myDate.toLocaleDateString()); // Output: current date in string format based on the user's locale
// console.log(myDate.toLocaleTimeString()); // Output: current time in string format based on the user's locale
// console.log(myDate.getFullYear()); // Output: current year
// console.log(myDate.getMonth()); // Output: current month (0-11)
// console.log(myDate.getDate()); // Output: current day of the month (1-31)
// console.log(myDate.getDay()); // Output: current day of the week (0-6)
// console.log(myDate.getHours()); // Output: current hour (0-23)
// console.log(myDate.getMinutes()); // Output: current minute (0-59)
// console.log(myDate.getSeconds()); // Output: current second (0-59)
// console.log(myDate.toISOString()); // Output: current date and time in ISO format

// console.log(typeof myDate); // Output: "object"

// let myCreatedDate = new Date(2026, 0, 26);
// let myCreatedDate = new Date(2026, 0, 26, 10, 30, 0);
let myCreatedDate = new Date("03-11-2026");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: current timestamp in milliseconds since January 1, 1970
console.log(myCreatedDate.getTime()); // Output: timestamp of the created date in milliseconds since January 1, 1970
console.log(Math.floor(myTimeStamp / 1000)); // Output: current timestamp in seconds since January 1, 1970

console.log(
  myCreatedDate.toLocaleString("Default", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }),
);
