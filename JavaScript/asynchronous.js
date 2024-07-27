// Function to fetch and process data sequentially
async function fetchDataSequentially(urls) {
    for (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }
  }
  
  // Example usage:
  const urls = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2"];
  fetchDataSequentially(urls);
  