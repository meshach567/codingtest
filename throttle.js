// Throttling function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  // Example usage:
  const log = throttle(() => console.log('Throttled!'), 1000);
  log();
  