/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

const mode1 = new ListNode(1);
const mode2 = new ListNode(3);
const mode3 = new ListNode(4);

mode1.next = mode2;
mode2.next = mode3;


function printList(head) {
  let current = head;
  while (current !== null) {
      console.log(current.val);  // Print the current node's value
      current = current.next;   // Move to the next node
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current  = dummy;
  while(list1 !== null && list2 !== null) {
      if(list1.val < list2.val) {
          current.next = list1
          list1 = list1.next
      } else {
           current.next = list2
          list2 = list2.next
      }
      current = current.next;
  }
  
    if (list1 !== null) {
      current.next = list1;
  } else {
      current.next = list2;
  }

  // Return the merged list, starting from the node after dummy
  return dummy.next;
};

console.log(node1)