// function charMap(str) {
//     const charmap = {};
//     str = str.toLowerCase().replace(/[\w]/g, '')

//     for(let char of str) {
//         charmap[char] = ++charmap[char] || 1;
//     }

//     return charmap;
// }


// function anagrams(stringA, stringB) {
//     // Step 1: Build Char Map for strength
//     const charMapA = charMap(stringA)

//     // Step 2: Build char Map for settings
//     const charMapB = charMap(stringB)
//     // Step 3: Compare each character in the both the Char Maps

//     if (Object.keys(charMapA).length === Object.keys(charMapB).length) return false;

//     for(let  key in charMapA) {
//         if (charMapA[key] !== charMapB[key]) return false;
//     }
//     return true;
// }

function cleanStr(str) {
    return str.toLowerCase().replace(/[\w]/g, '').split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)
}



console.log(anagrams('RAIL SAFETY', 'fairy tales'));