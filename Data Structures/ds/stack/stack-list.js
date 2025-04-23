class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

//Stack (LIFO) implementation of single linked list
class ListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    //insert element in start of 
    enqueue(newVal) {
        let node = new Node(newVal)
        node.next = this.head;
        this.head = node;
        this.size++;
        return this
    }
    dequeue() {
        if(!this.head) return undefined;
        let current = this.tail;
        this.head = this.head.next;
        this.size--;
        return current;
    }
}

var list = new ListQueue();

list.enqueue(21)
list.enqueue(22)
list.enqueue(23)
list.enqueue(24)
console.log("head ", list.head)
list.dequeue()
console.log("head ", list.head)



