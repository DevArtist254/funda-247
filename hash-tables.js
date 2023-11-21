//Hash tables or maps [java] or objects [js] or dictoray [phython]
//key - is the value of the address on memory
//value - is the primtive type

//Hash function is a function that generates a value of fixed length for each input it gets
//md5, SHA-1, SHA-265 - generates the encrypted address
//its one way
//input is always the same as the output
//idempotent

//Advantage fast data access
//Big O(1)
//Memory - random placement of data (Collision causing linked lists)
//0(n/k) = O(n)
//looping through keys with no grante order

//Insert - O(1)
//lookup - O(1)
//Delete - O(1)
//search - O(1)

//Javascript implementation of hash tables
let user = {
 age: 54,
 name: "Voke",
 scream: function () {
  console.log("aahhhh!")
 },
}

//Point to a place in memory
user.scream()

//Maps hd - allows maintains of insertion order, also allows key primitive types
const a = new Map()
const b = new Set()

class HashTable {
 constructor(size) {
  //this.data = ["",""] if 2
  this.data = new Array(size)
 }

 _hash(key) {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
   //(0 + 18 * 2) % 3 note key must always be a string
   hash = (hash + key.charCodeAt(i) * i) % this.data.length
  }
  return hash
 }

 set(key, value) {
  //hash give us a place in memory or the array where the value will be stored
  let address = this._hash(key)
  this.data[address] = value
 }

 get(key) {
  let address = this._hash(key)
  return this.data[address]
 }

 keys() {
  const keysArr = []

  for (let i = 0; i < this.data.length; i++) {
   const element = this.data[i]
   if (this.data[i]) {
    keysArr.push(this.data[i][0][0])
   }
  }

  return keysArr
 }
}

const myHashTable = new HashTable(50)

//myHashTable._hash("grapes")
myHashTable.set("grapes", 10000)
console.log(myHashTable.get("grapes"))
myHashTable.set("apples", 9)
console.log(myHashTable.get("apples"))

console.log(myHashTable.data)

/**
 * Arrays           Hash tables
 *
 * Search O(n)      Search O(1)
 * Lookup O(1)      Lookup O(1)
 * Insert O(n)      Insert O(1)
 * Push   O(1)
 * Delete O(n)      Delete O(n)
 *
 * Ordered          Unordered
 */
