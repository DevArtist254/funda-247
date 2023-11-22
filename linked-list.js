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
}

const List = new myLinkedList(10)

List.append(5)
List.prepend(16)

console.log(List)
