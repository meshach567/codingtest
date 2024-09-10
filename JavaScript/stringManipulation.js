// Given a string, return the reverse of the string

function reverseString(str) {
    const reversed =  str.split('').reverse().join('');
    console.log(reversed)

    if (str === reversed) {
        return true
    }

    return false
}

console.log(reverseString('codingmoney'))