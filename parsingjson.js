// Function to safely parse JSON
function safeParseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Invalid JSON:', error);
      return null;
    }
  }
  
  // Example usage:
  const validJSON = '{"name": "John"}';
  console.log(safeParseJSON(validJSON)); // Output: { name: "John" }

  