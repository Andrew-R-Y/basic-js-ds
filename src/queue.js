const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = {};
    node.value = value;
    node.next = null;
    if (!this.length) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }
  }

  dequeue() {
    if (!this.length) {
      return;
    }
    if (this.length === 1) {
      const result = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return result;
    } else {
      const result = this.head.value;
      this.head = this.head.next;
      this.length -= 1;
      return result;
    }
  }
}

module.exports = {
  Queue,
};
