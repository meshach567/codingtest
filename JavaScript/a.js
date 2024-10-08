// step  1 Declare and initialise the array
let a = [1,3,3,4]; 

// Traversing of the array
for (const i of a) {
    console.log(i)
}

// step 1: Create a function insertElement

function insertElement(arr, n, x, pos) {
    let i = n -1;

    //step 2 inser new value 
    for(i; i>= pos; i--) {
        arr[i+1] = arr[i]
    }
    arr[pos] = x;
    
}