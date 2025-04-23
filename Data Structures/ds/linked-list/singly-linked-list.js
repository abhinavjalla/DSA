class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(newVal) {
        let newNode = new Node(newVal);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current
    }

    shift() {
        if (!this.head) return undefined
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current;
    }
    unshift(newVal) {
        let newNode = new Node(newVal);
        if (!this.head) {
            this.push(newNode)
        } else {
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
            this.length++;
        }
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter =0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }

    set(index,newVal) {
        let existingElement = this.get(index);
        if(!existingElement) return false 
        existingElement.val = newVal;
        return true

    }

    insert(index,newVal) {
        if(index < 0 || index >= this.length) return false;
        let newNode = new Node(newVal);
        let existingElement = this.get(index -1);
        if(!existingElement) {
           let curr =  this.head;
           this.head = newNode;
           this.head.next = curr;
        } else {
            existingElement.next = newNode;
        }
        return true

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index == this.length -1) return this.pop();
        if(index == 0) return this.shift();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;

    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = this.head;
        let prev = null;
        var next;
        for(let i = 0 ; i < this.length;i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

var list = new SinglyLinkedList();

list.push(21)
list.push(22)
list.push(23)
list.push(24)
// console.log("head ", list.head)
// console.log(list.insert(0,29))
// console.log("head ", list.head)

console.log("get index ", list.get(0).val)
console.log("get index ", list.get(1).val)
console.log("get index ", list.get(2).val)
console.log("get index ", list.get(3).val)
list.reverse()
console.log("-----------------------------")
console.log("get index ", list.get(0).val)
console.log("get index ", list.get(1).val)
console.log("get index ", list.get(2).val)
console.log("get index ", list.get(3).val)

// console.log("head ", list.head)
// console.log("tail ", list.tail)