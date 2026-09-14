class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    return (this._email = value);
  }

  get password() {
    return `${this._password}Shansay`;
  }
  set password(val) {
    this._password = val;
  }
}

const shansay = new User("shansay@ai.co", "123@ai");
console.log(shansay.password);
console.log(shansay.email);
