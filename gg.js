//Google Qn
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return the 2

// Set it to hash buckets with the same value
// return the value of the large data set

const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]

const store = []
const hashList = {}

function reccNo(input) {
 for (let i = 0; i < input.length; i++) {
  const element = input[i]
  for (let k = 1; k < input.length; k++) {
   if (input[k] === input[i - 1]) {
    return input[k]
   }
  }
 }

 return undefined
}

console.log(reccNo(arr))
