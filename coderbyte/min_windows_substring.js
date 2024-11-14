function MinWindowSubstring(strArr) {
    const [str, target] = strArr;
    let left = 0, right = 0, minStart = 0, minLength = Infinity;
    const needed = new Map();
    let count = target.length;
  
    for (const char of target) {
      needed.set(char, (needed.get(char) || 0) + 1);
    }
  
    while (right < str.length) {
      if (needed.has(str[right])) {
        needed.set(str[right], needed.get(str[right]) - 1);
        if (needed.get(str[right]) >= 0) {
          count--;
        }
      }
  
      while (count === 0) {
        const windowLength = right - left + 1;
        if (windowLength < minLength) {
          minStart = left;
          minLength = windowLength;
        }
  
        if (needed.has(str[left])) {
          needed.set(str[left], needed.get(str[left]) + 1);
          if (needed.get(str[left]) > 0) {
            count++;
          }
        }
  
        left++;
      }
  
      right++;
    }
  
    return minLength === Infinity ? "" : str.slice(minStart, minStart + minLength);
  }
  
  // Example usage
  console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: "dae"
  console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // Output: "aabd"