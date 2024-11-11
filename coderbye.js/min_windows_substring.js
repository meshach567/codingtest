function MinWindowSubstring(strArr) {
    let str = strArr[0];
    let needle =  strArr[1].split('');

    // start with the smalest possible substring, then go up
    for (let i = needle.length, len = str.length; i <= len; i++) {
        for ( j = 0; j <= len - i; j++) {
            let mySlice = str.substr(j, i);
            if (isContained(mySlice)) {
                return mySlice;
            }
        }
        
    }
    return 'Not in string';
}

// keep this function call here 
MinWindowSubstring(readline());