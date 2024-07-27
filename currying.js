function add(a) {
    return function (b) {
        return a + b;
    };
}

// Example usage:
const addFive = add(5);
console.log(addFive(3));