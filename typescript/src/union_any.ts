let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";
//Error: apiRequestStatus = "done"

let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "window";

const orders = ["12", "20", "28", "42"];
// let currentOrder; any type should be avoided
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
