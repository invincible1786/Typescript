import { Todo, TodoStatus, FilterOption } from "./types.js";

let todos: Todo[] = [];
let nextId: number = 1;

/** Add a new todo */
export function addTodo(text: string, priority?: Todo["priority"]): Todo {
  const newTodo: Todo = {
    id: nextId++,
    text,
    status: "todo",
    priority,
  };
  todos.push(newTodo);
  return newTodo;
}

/** Delete a todo by ID */
export function deleteTodo(id: number): boolean {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

/** Toggle todo status between "todo" and "done" */
export function toggleTodo(id: number): Todo | null {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    // Type narrowing / status flipping
    todo.status = todo.status === "todo" ? "done" : "todo";
    return todo;
  }
  return null;
}

/** Filter todos based on status */
export function filterTodos(filter: FilterOption): Todo[] {
  if (filter === "all") {
    return todos;
  }
  // Type narrowing: filter ensures status matches "todo" | "done"
  return todos.filter((todo) => todo.status === filter);
}