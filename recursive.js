// Function to calculate factorial using recursion
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  