import { z } from "zod";
import { Result } from "./types";

/**
 * Generic fetcher that handles HTTP requests, network errors, 
 * and runtime schema validation safely.
 */
async function fetchAndValidate<T>(
  url: string,
  schema: z.ZodSchema<T>
): Promise<Result<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        status: "error",
        message: `HTTP Error: ${response.status} ${response.statusText}`,
      };
    }

    // Treat raw response body as unknown
    const rawData: unknown = await response.json();

    // Validate runtime data against our Zod schema (acts as our type guard)
    const validationResult = schema.safeParse(rawData);

    if (!validationResult.success) {
      return {
        status: "error",
        message: `Validation Failed: ${validationResult.error.message}`,
      };
    }

    return {
      status: "ok",
      data: validationResult.data,
    };
  } catch (error) {
    // Handle network dropouts or unexpected runtime exceptions
    const errorMessage =
      error instanceof Error ? error.message : "Unknown network error occurred";
    return {
      status: "error",
      message: errorMessage,
    };
  }
}

/**
 * Fetch a list of users and validate them as an array of the given schema.
 */
export async function fetchUsers<T>(
  url: string,
  schema: z.ZodSchema<T>
): Promise<Result<T>> {
  return fetchAndValidate(url, schema);
}