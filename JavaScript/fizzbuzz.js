function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(5)