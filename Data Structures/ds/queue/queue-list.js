class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

//Queue (FIFO) implementation of single linked list
class ListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    enqueue(newVal) {
        let node = new Node(newVal)
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this
    }
    dequeue() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.size--;
        return current;
    }
}

