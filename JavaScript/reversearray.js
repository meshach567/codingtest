// fucntion to reverse an array
function reverseArray(arr) {
    let n = arr.length;

    // dynamic array; temp array to store new array
    let temp = new Array(n);

    //traverse the array; copy elements from the original array to temp array
    for(let i = 0; i < n; i++) {
        temp[i] = arr[n - i - 1 ];
    };

    // Copy elements back to original array

    for(let i = 0; i < n; i++) {
        arr[i] = temp[i]
    }
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);

console.log(arr.join(" "));



