function memoize(fn) {
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }

        return cache[key];
    };
}

const factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5));