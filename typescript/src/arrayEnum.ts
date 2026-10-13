const chaiFlavours: string[] = ["Masala", "Ginger"];
const chaiPrice: number[] = [20, 30];
const rating: Array<number> = [4.5, 5.0];

type chai = {
  name: string;
  price: number;
};
const menu: chai[] = [
  { name: "Masala", price: 20 },
  { name: "Ginger", price: 30 },
];

const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune"); does not change as it is readonly

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let userInfo: [string, number, boolean?];
userInfo = ["Shansay", 100];
userInfo = ["Bhatia", 1100, true];

const location: readonly [number, number] = [28.66, 32.22];

//Named Tuple
const chaiItems: [name: string, price: number] = ["Masala", 25];

// ENUMS: restrict choices
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;
// Auto Increment
enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making ${type} chai`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala");

let t: [string, number] = ["Chai", 20];
t.push("extra");
