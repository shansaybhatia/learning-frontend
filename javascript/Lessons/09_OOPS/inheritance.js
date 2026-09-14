class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`A new course wahs added by ${this.username}`);
  }
}

const shansay = new Teacher("Shansay", "shansay@teacher.com", "123");
shansay.addCourses();
shansay.logMe();

const nauva = new User("nauva");
nauva.logMe();
console.log(nauva instanceof Teacher);
