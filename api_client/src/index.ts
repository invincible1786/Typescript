import { fetchUsers } from "./api";
import { UserSchema, User } from "./types";

async function main() {
  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  console.log("Fetching user securely...");

  // We expect an array or single object depending on the endpoint. 
  // Let's wrap the schema in z.array() if fetching multiple, or use UserSchema directly.
  const result = await fetchUsers(API_URL, UserSchema);

  // Handle Discriminated Union
  if (result.status === "error") {
    console.error(`❌ Error encountered: ${result.message}`);
    return;
  }

  // TypeScript now knows definitively that result.status === "ok" 
  // and result.data is safely typed as User!
  const user: User = result.data;

  console.log("✅ Successfully fetched and validated user data:");
  console.log(`- Name: ${user.name}`);
  console.log(`- Email: ${user.email}`);
  console.log(`- Phone: ${user.phone}`);
}

main();