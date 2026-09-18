function getTea(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Tea......`;
  }
  return `Tea order: ${kind}`;
}

function serveTea(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default Ginger Tea`;
}

function orderTea(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small IcedTea`;
  }
  if (size === "medium" || size === "large") {
    return `Make extra Tea!`;
  }
  return `Tea orders #${size}`;
}

class BlackTea {
  serve() {
    return `Serving BlackTea`;
  }
}
class GreenTea {
  serve() {
    return `Serving GreenTea`;
  }
}

function serve(Tea: BlackTea | GreenTea) {
  if (Tea instanceof BlackTea) {
    return Tea.serve();
  }
}

type teaOrder = {
  type: string;
  sugar: number;
};

//Type checking
function isTeaOrder(obj: any): obj is teaOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: teaOrder | string) {
  if (isTeaOrder(item)) {
    return `Serving ${item.type} tea with ${item.sugar} sugar`;
  }
  return `Serving custom Tea: ${item}`;
}

type GingerTea = { type: "ginger"; spicelevel: number };
type LemonTea = { type: "lemon"; amount: number };
type ElaichiTea = { type: "elaichi"; aroma: number };
type Tea = GingerTea | LemonTea | ElaichiTea;

function makeTea(order: Tea) {
  switch (order.type) {
    case "elaichi":
      return `ElaichiTea`;
      break;
    case "ginger":
      return `GingerTea`;
      break;
    case "lemon":
      return `LemonTea`;
      break;
  }
}

function brew(order: GingerTea | LemonTea) {
  if ("spicelevel" in order) {
  }
}

// function isStingArray(arr: unknown): arr is string[]{
// }
