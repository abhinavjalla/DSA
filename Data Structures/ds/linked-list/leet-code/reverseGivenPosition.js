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
    traverse() {
        let temp = this.head;
        while(temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail  = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }
    reverseGivenPositions(left,right) {
        let prev = new Node(null)
        prev.next = this.head;
        for(let k = 1; k < left; k++) {
            prev = prev.next;
        }
         let newPrev = prev.next;
         let newCurr = prev.next.next;
         
        for(let i =0; i < right - left; i++) {
           
            let newNext = newCurr.next;
            newCurr.next = newPrev;
            newPrev = newCurr;
            newCurr = newNext;
        }
          prev.next.next = newCurr;
          prev.next = newPrev;
          if(left === 1) this.head = newPrev;
        
    }

}




let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);


ll.traverse();
ll.reverseGivenPositions(2,6);
ll.traverse();
