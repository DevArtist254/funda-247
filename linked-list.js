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
