import dotenv from "dotenv";
import generate from "../src/generate.js";
import generateWithUsage from "../src/generateWithUsage.js";
import usage from "../usageData.js";

dotenv.config();

// use your own key from "Behind the Name" api
const api_key = process.env.BTN_API_KEY;

// getting a random usage code from usageData file
const usageCode = usage[9].code;

await generate(api_key, 3, "yes");

await generateWithUsage(api_key, usageCode, 1, "no", "f");
