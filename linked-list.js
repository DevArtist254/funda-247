/**
 * What is a linked list
 *
 * Node with pointers starting with head to tail - null terminated
 */

const basket = ["apples", "grapes", "pears"]

// linked list: apples --> grapes -->  pears

// apples
// 8047 --> grapes
//          8742  --> pears
//                    372  --> null

// Prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// Pointer is a reference that points to the same place in memory giving the user the abilty to delete data

//Linked list

//Advantages

/**
 * Fast insertion
 * fast del
 * Ordered
 * Flexible Size
 */

/**
 * Slow lookup
 * More memory
 */

//Visualize

// {
//  item: "apples" // apples
//  // 8047 --> grapes
//  //          8742  --> pears
//  //                    372  --> null
//  items: ["apples", "grapes", "peers", null] // is formed to add memory
// }

//10-->5-->16
// let myLinkedList = {
//  head: {
//   value: 10,
//   next: {
//    value: 5,
//    next: {
//     value: 16,
//     next: null,
//    },
//   },
//  },
// }

class myLinkedList {
 constructor(head) {
  this.head = {
   value: head,
   next: null,
  }
  this.length = 1
  this.tail = this.head
 }

 append(data) {
  const newNode = {
   value: data,
   next: null,
  }
  this.tail.next = newNode
  this.tail = newNode
  this.length++
  return this
 }

 prepend(data) {
  const newNode = {
   value: data,
   next: null,
  }
  newNode.next = this.head
  this.head = newNode
  this.length++
  return this
 }

 printList() {
  const array = []
  let currentNode = this.head
  while (currentNode !== null) {
   array.push(currentNode.value)
   currentNode = currentNode.next
  }
  return array
 }

 //insert(index, value){}
}

const List = new myLinkedList(10)

List.append(5) //Just added values at the last position
List.prepend(16) //Just added values at the first position

console.log(List.printList())

// Pointer is a reference that points to the same place in memory giving the user the abilty to delete data

//Linked list

//Advantages

/**
 * Fast insertion
 * fast del
 * Ordered
 * Flexible Size
 */

/**
 * Slow lookup
 * More memory
 */

//Visualize

// {
//  item: "apples" // apples
//  // 8047 --> grapes
//  //          8742  --> pears
//  //                    372  --> null
//  items: ["apples", "grapes", "peers", null] // is formed to add memory
//  //Head .....................  tail
// }

//Doubly linked lists - allowing us to tranverse backwards

let y

y = {
 value: data,
 next: null,
 prev: data,
}

//single list - good for memory, can't transverse backwards

//double list - good operation transversal and searching

//node value of data and pointer
//head --> data --> tail -->null

const basket = ["apples", "graphes", "pears"]

//ie linked list: apples --> graphes --> pears

/**
 * apples
 * 89743 --> graphes
 *           78688 --> pears
 *                     372   --> null
 */

//Pointer is ref to another place in memory

const obj1 = {a: true}
const obj2 = obj1
obj1.a = "booyta"
delete obj1

console.log("1", obj1)
console.log("2", obj2)

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
 constructor(value) {
  this.value = value
  this.next = null
 }
}

class LinkedLis {
 constructor(value) {
  this.head = {
   value: value,
   next: null,
  }

  this.tail = this.head

  this.length = 1
 }
 prepend(value) {
  const newNode = new Node(value)

  newNode.next = this.head
  this.head = newNode
  this.length++

  return this
 }

 append(value) {
  const newNode = new Node(value)

  //Appends it to our value
  this.tail.next = newNode
  console.log(this.tail.next)
  //Appends it to our ref point or state
  this.tail = newNode
  console.log(this.tail)
  this.length++

  //Storage our value
  return this
 }

 printList() {
  const array = []
  let currentNode = this.head
  while (currentNode !== null) {
   array.push(currentNode.value)
   currentNode = currentNode.next
  }

  return array
 }

 insert(index, value) {
  const newNode = new Node(value)

  const startingPoint = this.traverseToLeader(index - 1)
  const tempHoldingPoint = startingPoint.next
  startingPoint.next = newNode
  newNode.next = tempHoldingPoint

  return this
 }

 traverseToLeader(index) {
  let i = 0
  let currentNode = this.head
  while (i !== index) {
   currentNode = currentNode.next
   i++
  }

  return currentNode
 }
}

const myLinkedLis = new LinkedLis(10)
myLinkedLis.prepend(16)
myLinkedLis.prepend(5)

console.log(myLinkedLis.insert(2, "hello"))

console.log(myLinkedLis.printList())

console.log(myLinkedLis)
