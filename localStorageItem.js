// Function to save user preferences to localStorage
function savePreferences(preferences) {
    // const local = localStorage.setItem('preferences', JSON.stringify(preferences));
    // return local;
    localStorage.setItem('preferences', `${JSON.stringify(preferences)}`);
  }
  
  // Function to get user preferences from localStorage
  function getPreferences() {
    const prefs = localStorage.getItem('preferences');
    return prefs ? JSON.parse(prefs) : null;
  }
  
  // Example usage:
  const prefs = { theme: "dark", language: "en" };
  savePreferences(prefs);
  console.log(getPreferences()); // Output: { theme: "dark", language: "en" }
  