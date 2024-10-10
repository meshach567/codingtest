function rightRotate(arr, k) {
    const n = arr.length;

    k = k %n;

    for ( let i = 0; i < n; i++) {
        if (i < k) {
            process.stdout.write(arr[n + i - k])
        } else {
            process.stdout.write(arr[i - k] + "  ")
        }
    }

        proocess.stdout.write('\n');
}

const Array = [1, 2, 3, 4, 5];
const K = 2;

rightRotate(Array, K);