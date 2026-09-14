const User = {
  _email: "s@sb.com",
  _password: "efg",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const nauva = Object.create(User);
console.log(nauva.email);
