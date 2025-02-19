function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Please provide numbers only";
  }
  return a + b;
}

console.log(foo(5, "5")); // Output: 10
console.log(foo("hello", 5)); //Output: Invalid input: Please provide numbers only