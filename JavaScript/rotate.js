function rotateArray(arr, d) {
    let n = arr.length;

    // Handle case when d > n;

    d %= n;

    // traverse the array; store rotation of the array;
    let temp = new Array(n);


    // Copy last n - d elements to the front of temp
    for (let i = 0; i < n - d; i++)
        temp[i] = arr[d + i];

    for (let i = 0; i < d; i++)
        temp[n - d + i] = arr[i];

    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArray(arr, d);

// Print the rotated array
console.log(arr.join(" "));