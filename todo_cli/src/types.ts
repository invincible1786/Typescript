export type TodoStatus = "todo" | "done";
export type Priority = "low" | "medium" | "high";
export type FilterOption = "all" | "todo" | "done";

export interface Todo {
  id: number;
  text: string;
  status: TodoStatus;
  priority?: Priority; 
}
