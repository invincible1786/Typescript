import { z } from "zod";

// 1. Define the Zod schema for a single User object from JSONPlaceholder
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
});

// Infer the TypeScript type automatically from the Zod schema
export type User = z.infer<typeof UserSchema>;

// 2. Define the Discriminated Union for our API Response result
export type Result<T> =
  | { status: "ok"; data: T }
  | { status: "error"; message: string };