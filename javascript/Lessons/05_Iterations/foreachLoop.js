const coding = ["js", "rb", "py", "cpp", "swift"];

const value = coding.forEach(function (item) {
  console.log(item);
});
console.log(value); //foreach loop does not return any value

coding.forEach((value) => {
  console.log(value);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageName);
});
