/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/
// Basic wrapper for a primitive
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
function assert(val1, val2, message) {
    if (val1 !== val2) {
        console.log("Assertion Failed: ", message);
        console.log(val1, "does not equal", val2);
    }
    else {
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
var Stack = (function () {
    function Stack() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Stack.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Stack.prototype.getLastItem = function () {
        return this.storage.pop();
    };
    Stack.prototype.peekLastItem = function () {
        // todo: return a reference to the last item in storage without removing
        var x = (this.storage.length - 1);
        return this.storage[x];
    };
    Stack.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        return false;
    };
    return Stack;
}());
var st = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");
st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");
var i = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");
var i2 = st.getLastItem();
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
var Queue = (function () {
    function Queue(item_list) {
        this.value = item_list;
    }
    Queue.prototype.push = function (val) {
        return this.value.push(val);
    };
    Queue.prototype.pop = function () {
        return this.value.shift();
    };
    Queue.prototype.list = function () {
        console.log("These are all of the things: ");
        for (var i_1 = 0; i_1 < this.value.length; i_1++) {
            console.log(this.value[i_1]);
        }
    };
    return Queue;
}());
var testOne = new Queue(["first", "next", "and then"]);
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
var Ways = (function () {
    function Ways(mode, name) {
        this.mode = mode;
        this.name = name;
    }
    Ways.prototype.lyrics = function () {
        console.log(this.mode + this.name);
    };
    return Ways;
}());
var lineOne = new Ways("Just get on a bus, ", "Gus");
var lineTwo = new Ways("Make a new plan, ", "Stan");
var lineThree = new Ways("You don't need to be coy, ", "Roy");
var lineFour = new Ways("Just get yourself free ", "");
lineOne.lyrics();
lineTwo.lyrics();
lineThree.lyrics();
lineFour.lyrics();
