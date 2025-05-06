class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === val) return undefined
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        while (true) {
            if (current.value === val) {
                return true
            } else {
                if (val < current.value) {
                    if (current.left === null) return false
                    current = current.left;
                } else {
                    if (current.right === null) return false
                    current = current.right;
                }
            }
        }
    }

    // Helper to find the minimum node in a subtree
    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    remove(value, current = this.root, parent = null) {
        if (current === null) return
        if (value < current.value) {
            this.remove(value, current.left, parent = current);
        } else if (value > current.value) {
            this.remove(value, current.right, parent = current);
        } else {
            //node to delete found

            //no child
            if (!current.left && !current.right) {
                if (!parent) this.root = null;
                else if (parent.left === current) parent.left = null;
                else parent.right = null;
            }

            //one child
            else if (!current.left || !current.right) {
                let child = current.left || current.right;
                if (!parent) this.root = child;
                else if (parent.left === current) parent.left = child;
                else parent.right = child;

            }
            //two child
            else {
                let successor = this.findMin(current.right);
                current.value = successor.value;
                this.remove(successor.value, current.right, current)
            }


        }
    }

    /**
* Performs a Breadth-First Search (BFS) traversal on the binary tree.
* Traverses the tree level by level from left to right and returns an array of node values.
* 
* Logic:
* 1. Initialize an empty queue to manage the nodes to be visited (FIFO).
* 2. Initialize an empty array to store the visited node values.
* 3. Add the root node to the queue to begin the traversal.
* 4. While the queue is not empty:
*    a. Remove the front node from the queue (i.e., the oldest added node).
*    b. Add the value of the current node to the visited array.
*    c. If the current node has a left child, enqueue it.
*    d. If the current node has a right child, enqueue it.
*    e. This ensures that nodes are visited level by level, left to right.
* 5. Repeat step 4 until the queue is empty.
* 6. Return the array containing the values of nodes in BFS order.
* 
* @returns {Array} An array of node values in level-order (BFS) traversal.
*/

    breadthFirstSearch() {
        if (this.root === null) return []
        let queue = [this.root];
        let visited = [];
        while (queue.length) {
            let current = queue.shift();
            visited.push(current.value);
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        return visited;

    }

    //root left right
    preOrderDFS(element, result = []) {
        if (element === null) return result;
        result.push(element.value);
        this.preOrderDFS(element.left, result);
        this.preOrderDFS(element.right, result);
        return result
    }

    //left right root
    postOrderDFS(element, result = []) {
        if (element === null) return result;
        this.postOrderDFS(element.left, result);
        this.postOrderDFS(element.right, result);
        result.push(element.value);
        return result
    }

    //left root rigth
    inOrderDFS(element, result = []) {
        if (element === null) return result;
        this.inOrderDFS(element.left, result);
        result.push(element.value);
        this.inOrderDFS(element.right, result);
        return result;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(9);
tree.insert(20);
console.log("BFS", tree.breadthFirstSearch());
tree.remove(8)
console.log("BFS", tree.breadthFirstSearch());
// console.log("pre-order dfs",tree.preOrderDFS(tree.root))
// console.log("post order dfs",tree.postOrderDFS(tree.root))
// console.log("in order dfs",tree.inOrderDFS(tree.root))