const promiseOne = new Promise(function (reoslve, reject) {
  //Async Task: DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is completed");
    reoslve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (reoslve, reject) {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    reoslve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

const promiseThree = new Promise(function (reoslve, reject) {
  setTimeout(() => {
    reoslve({ username: "Shansay Bhatia", email: "shansay@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (reoslve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      reoslve({ username: "Shansay Bhatia", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((reoslve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      reoslve({ username: "JavaScript", password: "12345" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/shansaybhatia")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
