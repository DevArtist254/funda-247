class MyArray {
 constructor() {
  this.length = 0
  this.data = {}
 }

 get(index) {
  return this.data[index]
 }

 push(item) {
  this.data[this.length] = item
  this.length++
  return this.length
 }

 pop() {
  const lastItem = this.data[this.length - 1]
  delete this.data[this.length - 1]
  this.length--
  return lastItem
 }

 delete(index) {
  this.data[index]
  this.shiftItems(index)
 }

 shiftItems(index) {
  for (let i = index; i < this.length - 1; i++) {
   this.data[i] = this.data[i + 1]
  }
  delete this.data[this.length - 1]
  this.length--
 }
}

const newArray = new MyArray()
console.log(newArray.push("k"))
console.log(newArray.push("e"))
console.log(newArray.push("v"))
console.log(newArray.data)

//Arrays
// const str = ["a", "b", "c", "d"]

// console.log(str[3])

// str.push("e") // O(1)
// str.pop() // O(1)

// str.unshift("x") //n

// //Dynamic arrays
// const strings = [1, 2, 3, 4, 5, 6]

// //New ref is copied [1, 2, 3, 4, 5, 6]
// // then the new data is added [1, 2, 3, 4, 5, 6, 7];

// strings.push(1)
// let newArr = [1, 2, 3, 4, 5, 6, 7]

//'Hi My Name is Kevin'

function reverse(str) {
 //Check input
 if (!str || str.length < 2 || typeof str !== "string") return

 const backwards = []

 const totalItems = str.length - 1
 for (let i = totalItems; i >= 0; i--) {
  backwards.push(str[i])

  console.log(str[i])
 }

 return backwards.join("")
}

const str = "Hi My Name is Kevin"

console.log(reverse(str))

function mergeSortArr(a, b) {
 const newArr = []

 for (let i = 0; i < a.length; i++) {
  newArr.push(a[i])
 }

 for (let i = 0; i < b.length; i++) {
  newArr.push(b[i])
 }

 return newArr.sort((x, y) => x - y)
}

console.log(mergeSortArr([0, 3, 4, 31], [4, 6, 30]))

//Advantages

/**
 * Fast lookups
 * Fast push/pop at the end
 * Ordered
 */

/**
 * Slow inserts
 * Slow deletes
 * Fixed size
 */
