function rotateArr(arr, d) {
    let n = arr.length;

    for (let i = 0; i < d; i++) {
        let first = arr[0];

        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + i];
        }

        arr[n - 1] = first;
    }
}



function rotateArray(arr, d) {
    let n = arr.length;

    let temp = new Array(n);

    d %= n;

    for (let i = 0; i < n - d; i++)
        temp[i] = arr[d + i];

    for (let i = 0; i < d; i++)
        temp[n - d + i] = arr[i]

    for (let i = 0; i < n; i++)
        arr[i] = temp[i]
}

let arr = [5, 6, 7, 8, 9, 0, 1];
let d = 5;

rotateArray(arr, d);

console.log(arr.join(' '));