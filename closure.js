// Function that returns a function to increment a counter
function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  
  // Example usage:
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  