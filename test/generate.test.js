import generate from "../src/generate.js";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.BTN_API_KEY;

test("generates names", async () => {
  const result = await generate(api_key, 3, "yes");
  // Add assertions to check the result
  expect(result).toHaveLength(3);
  // Add more assertions based on your function's logic
});
