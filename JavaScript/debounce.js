// Debouncing function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example usage:
const log = debounce(() => console.log('Debounced!'), 300);
log();
