function rotateRight(arr, k) {
    let n = arr.length;

    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) { 
            process.stdout.write(arr[n + i - k] + " ") 
        } else { 
            process.stdout.write(arr[i - k] + " ")
        }
    }

    process.stdout.write("\n");
}

const Array = [4,5,6,7,8,9];

const k = 3;

rotateRight(Array, k);