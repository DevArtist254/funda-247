//Is a function that reffers to itself
//Id for the base case and when reached exit for the base case
//Id the recurrsive case with it's state condition
//return the case

// let counter = 0

// function DD() {
//  console.log(counter)
//  if (counter > 3) return "Done"
//  counter++
//  return DD()
// }

// console.log(DD())

//Good tasks that have repeated tasks
/**
 * Causes stake overflow
 * High memory usage
 */

// let state = 1

// function findFactorialRec(n) {
//  if (n === 1) return
//  state = state * n
//  return findFactorialRec(n - 1)
// }

// findFactorialRec(5)

// console.log(state)

let n = 0
let sequence = [0, 1]

function fibonacciSeq(i) {
 console.log(sequence)
 if (sequence.length === i + 1) return n

 n = sequence[sequence.length - 2] + sequence[sequence.length - 1]

 sequence.push(n)

 return fibonacciSeq(i)
}

console.log(fibonacciSeq(100))
