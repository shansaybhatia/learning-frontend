// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     console.log(this);
//     this.price = price;
//   }
// }

// const masalaChai = new Chai("Ginger", 35);
// masalaChai.flavour = "Masala";

class Chai {
  public flavour: string = "Masala";
  private secretIngredient = "Cardamom";
  reveal() {
    return this.secretIngredient;
  }
}

class Shop {
  protected shopName = "Chai corner";
}
class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}
const w = new Wallet();

class cup {
  readonly capacity: number = 200;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet!");
    this._sugar = value;
  }
}
const c = new ModernChai();
c.sugar = 3;

class Tea {
  static shopName = "Tea Corner";
  constructor(public flavour: string) {}
}
console.log(Tea.shopName);

abstract class Drink {
  abstract make(): void;
}
class makeChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}
class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
