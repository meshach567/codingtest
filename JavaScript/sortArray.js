function sortArray(arr, ppty) {
    return arr.sort((a, b) => a[ppty] > b[ppty] ? 1 : -1)
}

const movies = [
    { name: 'Movie B', rating: 8},
    { name: "Movie A", rating: 9 }
]

console.log(sortArray(movies))