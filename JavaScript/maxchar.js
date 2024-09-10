// Given a string, return the charater of the string that is commonly used

function maxChar(str) {
    const charMax = {};

    let max = 0;
    let maxCha = '';
    for(let char of str) {
        if (charMax[char]) {
            charMax[char] = charMax[char] + 1
        } else {
            charMax[char] = 1;
        }
    }

    for(const [key, value] of Object.entries(charMax)){
        if (value > max) {
            max = value;
            maxCha = key
        }
    }

    return maxCha;
}

console.log(maxChar('abcccccccd'));