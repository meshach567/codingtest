function rotateArray(arr, k) {
    const n = arr.length;

    k = k % n;

    for (let i = 0; i < n; i++) {
        if(i < k) {
            process.stdout.write(arr[ n + i - k] + " ");
        } else {
            process.stdout.write(arr[ i - k] + " ");
        }
    }

    process.stdout.write("\n");
}

const Array = [5,6,7,8,9,0];
const k = 3;

rotateArray(Array, k)