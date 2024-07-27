// Function to destructure properties from an object
function getUserInfo(user) {
    const { name, age, email } = user;
    return `Name: ${name}, Age: ${age}, Email: ${email}`;
  }
  
  // Example usage:
  const user = { name: 'John', age: 30, email: 'john@example.com' };
  console.log(getUserInfo(user)); // Output: Name: John, Age: 30, Email: john@example.com
  