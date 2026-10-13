interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = { id: 1, name: "CodeCafe" };

interface discountCalculator {
  (price: number): number;
}
const apply50: discountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {},
  stop() {},
};

interface ChaiRatings {
  [flavour: string]: number;
}
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.9,
};

interface user {
  name: string;
}
interface user {
  age: number;
}
const u: user = {
  name: "Shansay",
  age: 19,
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
