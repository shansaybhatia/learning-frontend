// DECLAYRING OBJECT TYPES

const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type cup = {
  size: string;
};

type user = {
  username: string;
  password: string;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai with ", updates);
};
updateChai({ price: 25 });

type chaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order);
};
// Even if the types is optional it is still required
placeOrder({ name: "LemonTea", quantity: 2 });

type chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
type BasicChaiInfo = Pick<chai, "name" | "price">;
const chaiInfo: BasicChaiInfo = {
  name: "LemonTea",
  price: 60,
};

type chaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};
// You do not need to give the ingredients then
type publicChai = Omit<chaiNew, "secretIngredients">;
