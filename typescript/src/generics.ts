function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray("masala");
wrapInArray(30);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("masala", "test");
pair(30, { flavor: "Ginger" });

interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 10 };

interface apiPromise<T> {
  status: number;
  data: T;
}
const response: apiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
