class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const shansay = new User("Shansay");
// console.log(shansay.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const nauva = new Teacher("Nauva");
nauva.logMe();
console.log(nauva.createId());
