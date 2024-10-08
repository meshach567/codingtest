function arrayRotate(arr, d) {
    let n = arr.length;

    for( let i =0; i < d; i++) {
        let first = arr[0];
        for(let j = 0; j < n - 1; j++) {
            arr[j] = arr[j+1]
        }

        arr[n -1] = first
    }
}

let arr = [3,4,5,6,7,8];

let d =2;

arrayRotate(arr, d);

console.log(arr.join(' '))