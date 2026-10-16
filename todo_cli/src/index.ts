import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { addTodo, deleteTodo, toggleTodo, filterTodos } from "./todoManager.js";
import { FilterOption } from "./types.js";

const rl = readline.createInterface({ input, output });

function displayMenu() {
  console.log("\n--- Typed Todo CLI ---");
  console.log("1. List todos (all / active / done)");
  console.log("2. Add todo");
  console.log("3. Toggle todo status");
  console.log("4. Delete todo");
  console.log("5. Exit");
}

async function main() {
  let running = true;

  while (running) {
    displayMenu();
    const choice = await rl.question("\nChoose an option (1-5): ");

    switch (choice.trim()) {
      case "1": {
        const filterInput = await rl.question("Filter by [all, todo, done] (default 'all'): ");
        const filter: FilterOption = ["all", "todo", "done"].includes(filterInput) 
          ? (filterInput as FilterOption) 
          : "all";
        
        const currentTodos = filterTodos(filter);
        console.log(`\n--- Todos (${filter.toUpperCase()}) ---`);
        if (currentTodos.length === 0) {
          console.log("No todos found.");
        } else {
          currentTodos.forEach((t) => {
            const checkbox = t.status === "done" ? "[✔]" : "[ ]";
            const priorityStr = t.priority ? `(Priority: ${t.priority})` : "";
            console.log(`${t.id}. ${checkbox} ${t.text} ${priorityStr}`);
          });
        }
        break;
      }
      case "2": {
        const text = await rl.question("Enter todo description: ");
        if (text.trim()) {
          const added = addTodo(text.trim());
          console.log(`Added todo #${added.id}`);
        } else {
          console.log("Description cannot be empty.");
        }
        break;
      }
      case "3": {
        const idStr = await rl.question("Enter ID of todo to toggle: ");
        const id = parseInt(idStr, 10);
        if (!isNaN(id)) {
          const updated = toggleTodo(id);
          if (updated) {
            console.log(`Todo #${updated.id} status changed to: ${updated.status}`);
          } else {
            console.log(`Todo with ID ${id} not found.`);
          }
        } else {
          console.log("Invalid ID.");
        }
        break;
      }
      case "4": {
        const idStr = await rl.question("Enter ID of todo to delete: ");
        const id = parseInt(idStr, 10);
        if (!isNaN(id)) {
          const success = deleteTodo(id);
          if (success) {
            console.log(`Deleted todo #${id}`);
          } else {
            console.log(`Todo with ID ${id} not found.`);
          }
        } else {
          console.log("Invalid ID.");
        }
        break;
      }
      case "5":
        console.log("Goodbye!");
        running = false;
        break;
      default:
        console.log("Invalid choice. Please choose between 1 and 5.");
        break;
    }
  }

  rl.close();
}

main();