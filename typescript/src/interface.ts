type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: chaiOrder) {
  console.log(order);
}
function serveChai(order: chaiOrder) {
  console.log(order);
}

type teaRecepie = {
  water: number;
  milk: number;
};
class masalaChai implements teaRecepie {
  water = 100;
  milk = 50;
}

interface cupSize {
  size: "small" | "large";
}
class chai implements cupSize {
  size: "small" | "large" = "large";
}

// type response = { ok: true } | { ok: false };
// class myRes implements response {
//   ok: boolean = true;
// }

// UNION | literal types
type teaType = "masala" | "ginger" | "lemon";
function orderChai(t: teaType) {
  console.log(t);
}

// INTERSECTION
type baseChai = { teaLeaves: number };
type extra = { ginger: number };
type gingerChai = baseChai & extra;
const cup: gingerChai = {
  teaLeaves: 2,
  ginger: 1,
};

// OPTIONAL VALUES
type user = {
  username: string;
  bio?: string;
};
const u1: user = { username: "Shansay" };
const u2: user = { username: "Shansay", bio: "shansay.co" };

// READONLY VALUES
type config = {
  readonly appName: string;
  version: number;
};
const cfg: config = {
  appName: "CodeStory",
  version: 1,
};
// cfg.appName = "HOLA" cannot assign appname as it is readonly value
