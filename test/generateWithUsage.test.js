import generateWithUsage from "../src/generateWithUsage.js";
import usage from "../usageData.js";
import dotenv from "dotenv";

dotenv.config();

const usageCode = usage[20].code;
const api_key = process.env.BTN_API_KEY;

test("generates names with usage", async () => {
  const result = await generateWithUsage(api_key, usageCode, 5, "yes", "m");
  // Add assertions to check the result
  expect(result).toHaveLength(5);
  // Add more assertions based on your function's logic
});
