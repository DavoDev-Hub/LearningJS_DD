// Maximally Efficent Queue sould have O(1) runtime
//

class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    enqueue(val) {
     const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.size === 0){return null}

        const removeNode = this.front;

        if (this.size === 1){this.back = null}

        this.front = this.front.next;
        this.size--;
        return removeNode.val;
    }
}

const myQueue = new Queue();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

