# Unexpected Type Coercion in JavaScript

This repository demonstrates a common, yet potentially confusing, aspect of JavaScript: type coercion.  The `bug.js` file contains a simple function that adds two values. However, when one value is a number and the other is a string, JavaScript's automatic type conversion leads to unexpected string concatenation instead of numerical addition.

The `bugSolution.js` file offers a solution to handle such scenarios and ensure correct numerical addition.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (Node.js, a browser's console, etc.).
3. Observe that the output is `"55"`, not `10` as one might expect.