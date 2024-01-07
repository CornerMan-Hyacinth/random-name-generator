import dotenv from "dotenv";
import generate from "./generate.js";

dotenv.config();

const generateWithUsage = async (
  apiKey,
  usage,
  responses = 2,
  surname = "no",
  gender = ""
) => {
  // API endpoint URL
  const apiUrl =
    gender !== ""
      ? `https://www.behindthename.com/api/random.json?usage=${usage}&gender=${gender}&key=${apiKey}&number=${responses}&randomSurname=${surname}`
      : `https://www.behindthename.com/api/random.json?usage=${usage}&key=${apiKey}&number=${responses}&randomSurname=${surname}`;

  if (responses > 6) {
    // throws this error if the responses provided is more than 6.
    throw new RangeError("The number of responses returned is limited to 6.");
  } else if (typeof responses !== "number") {
    // throws this error if the value of the 'responses' parameter is not a type of number
    throw new TypeError("Expected 'responses' as a Number.");
  } else if (apiKey === undefined) {
    throw new SyntaxError("A valid API key must be provided.");
  } else if (usage === undefined) {
    generate(apiKey, usage, surname, gender);
  } else {
    try {
      // Make a GET request to the Behind the Name API
      const response = await fetch(apiUrl);

      // Check if the request was successful (status code 200)
      if (response.ok) {
        const data = await response.json();

        // Extract the name from the response
        const randomNames = data.names;

        return randomNames;
      } else {
        console.error("Error fetching random name:", response.statusText);
      }
    } catch (error) {
      console.error("Caught an error while generating names:", error.message);
    }
  }
};

export default generateWithUsage;
