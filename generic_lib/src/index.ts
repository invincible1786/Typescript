import { Stack } from "./stack.js";
import { groupBy } from "./groupBy.js";
import type { MyPartial, MyPick, MyReadonly } from "./utilities.js";

// --- 1. Testing Stack<T> ---
console.log("--- Testing Stack ---");
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log("Peek:", numberStack.peek()); // 20
console.log("Pop:", numberStack.pop());   // 20
console.log("Size:", numberStack.size()); // 1

// --- 2. Testing groupBy ---
console.log("\n--- Testing groupBy ---");
interface Product {
  id: number;
  name: string;
  category: "Fruit" | "Vegetable";
}

const products: Product[] = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
];

const grouped = groupBy(products, "category");
console.log(grouped);

// --- 3. Testing Mapped Utility Types ---
console.log("\n--- Testing Utility Types ---");

interface User {
  id: number;
  name: string;
  email: string;
}

const partialUser: MyPartial<User> = {
  name: "Alice",
};

const pickedUser: MyPick<User, "id" | "name"> = {
  id: 1,
  name: "Bob",
};

const readonlyUser: MyReadonly<User> = {
  id: 2,
  name: "Charlie",
  email: "charlie@example.com",
};

console.log("Readonly User initialized successfully:", readonlyUser);