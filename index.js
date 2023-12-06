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

class LinkedList {
 constructor(value) {
  this.head = {
   value: value,
   next: null,
  }

  this.tail = this.head

  this.length = 1
 }

 append(value) {
  const newNode = {
   value: value,
   next: null,
  }

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
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
//myLinkedList.append(16)

console.log(myLinkedList)
