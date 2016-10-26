/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/

// Basic wrapper for a primitive
class Item {
    constructor(
        public value: number | string | boolean
    ) {}
}

function assert(val1: any, val2: any, message: string) {
    if (val1 !== val2) {
        console.log("Assertion Failed: ", message);
        console.log(val1, "does not equal", val2);
    } else {
        console.log(".");
    }
}

// 1. Stack

/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */

 class Stack {
    // set up our storage, and keep it from prying eyes
    private storage: Item[];

    constructor() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }

    addItem(i: Item): void {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    }

    getLastItem(): Item {
        return this.storage.pop();
    }

    peekLastItem(): Item {
        // todo: return a reference to the last item in storage without removing
        let x: number = (this.storage.length - 1);
        return this.storage[x];
    }

    isEmpty(): boolean {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        return false;
    }
 }

let st: Stack = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");

st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");

let i: Item = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");

let i2: Item = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");


// 2. Queue

/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.
 */

 // Write, from scratch, an implementation of a Queue, and at least one test for
 // each method on the Queue.

 class Queue {
         public value: Array<string>;

         constructor(item_list: Array<string>) {
             this.value = item_list;
         }

         push(val: string) {
            return this.value.push(val);
            }
         pop(): string {
            return this.value.shift();
         }

         list(): void {
            console.log("These are all of the things: ");
            for (let i = 0; i < this.value.length; i++) {
              console.log(this.value[i]);
            }
         }
 }

  let testOne = new Queue(["first", "next", "and then"]);

  console.log(testOne.push("Okay, now"));
  console.log(testOne.pop());
  testOne.list();


 // 3. Pick a Data Structure

 /* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
  * and implement it in
  * TypeScript. Be sure to include tests! Make sure to choose something that
  * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
  * if you need help :)

  or associative array/priority queue
  */

 class Ways {
      mode: string;
      name: string;

     constructor (mode: string, name: string) {
         this.mode = mode;
         this.name =  name;
     }

     lyrics(): void {
         console.log(this.mode + this.name);
     }
 }

 let lineOne = new Ways("Just get on a bus, ", "Gus");

 let lineTwo = new Ways("Make a new plan, ", "Stan");

 let lineThree = new Ways("You don't need to be coy, ", "Roy");

 let lineFour = new Ways("Just get yourself free ", "");

 lineOne.lyrics();
 lineTwo.lyrics();
 lineThree.lyrics();
 lineFour.lyrics();

