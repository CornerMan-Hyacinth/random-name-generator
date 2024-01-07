# Random-Name-Generator Library

A JavaScript library for generating random names based on different cultural categories.

## Installation

```bash
npm i generate-name-auto
```

## Usage

### API KEY

Go to https://www.behindthename.com/api/ and register to get your API Key to run this library.

### CODES

```javascript
import { generate } from "random-name-generator";

const options = {
  apiKey: your_api_key(/*required*/),
  responses: 2(/*not required*/),
  surname: "no"(/*not required*/),
  gender: "f"(/*not required*/),
};

const names = generate(options);
console.log(names);
```

```javascript
import { generateWithUsage } from "random-name-generator";

const options = {
  apiKey: your_api_key,
  usage: "eng"(/*required*/),
  responses: 5,
  surname: "yes",
  gender: "m",
};

const names = generateWithUsage(options);
console.log(names);
```

## API Reference

```javascript
generate(options);
```

Generates random names.

- apiKey (string): Your 'Behind the Name' API key for accessing the name generation service.
- responses (number): The number of names to generate.
- surname (string): Specify whether to include surnames. Values: 'yes' or 'no'.
- gender(string): Specify which gender names to be returned. Values: 'm' or 'f'
  Returns an array of randomly generated names.

```javascript
generateWithUsage(options);
```

Generates random names with a usage provision for a specified language/culture.

- apiKey (string): Your 'Behind the Name' API key for accessing the name generation service.
- usage (string): The usage of the names to be generated, like 'eng'. Visit the './usageData.js' file to see those that are available.
- responses (number): The number of names to generate.
- surname (string): Specify whether to include surnames. Values: 'yes' or 'no'.
- gender(string): Specify which gender names to be returned. Values: 'm' or 'f'
  Returns an array of randomly generated names.

## Examples

For more examples, please check the examples directory in the repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
