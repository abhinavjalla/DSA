class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(newVal) {
        let node = new Node(newVal);
        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }
   createCircle(position) {
    let index = 0;
    let temp = this.head;
    let actualNode = null;

    while (temp !== null) {
        if (index === position) {
            actualNode = temp;
            break;
        }
        temp = temp.next;
        index++;
    }
    if (actualNode) {
        this.tail.next = actualNode; // Creating the cycle
    }
}
reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev
}
}

 function cycleStart(head) {
    let fast = head;
    let slow = head;
    while(fast !=null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = head;
            while(slow != fast) {
                slow = slow.next;
                fast = fast.next
            }
            return slow
        }
    }

    return null
};

function removeCycle(head) {
    let startNode = cycleStart(head);
    if (!startNode) return;

    let ptr = startNode;
    while (ptr.next !== startNode) {
        ptr = ptr.next;
    }
    ptr.next = null;
}



 function giveMid(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow
};

let ll = new LinkedList();
ll.add(3);
ll.add(2);
ll.add(0);
ll.add(-4);
ll.add(-5);
console.log("cycle exists",cycleStart(ll.head));
ll.createCircle(2);
console.log("cycle exists",cycleStart(ll.head));
removeCycle(ll.head);
console.log("cycle exists",cycleStart(ll.head));
