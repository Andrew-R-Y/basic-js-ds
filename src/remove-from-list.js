const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head;
  let itemIndex = 0;
  if (l) {
    if (l.value) {
      head = l;
      current = head;
      let next = l.next;
      let previousItem;
      while (current) {
        if (current.value !== k) {
          itemIndex += 1;
          previousItem = current;
          current = current.next;
          if (current) {
            next = current.next;
          }
        } else {
          if (itemIndex === 0) {
            head = current.next;
            current = current.next;
            next = current.next;
          } else {
            previousItem.next = current.next;
            current = current.next;
          }
        }
      }
    } else return false;
  }
  return head;
}

module.exports = {
  removeKFromList,
};
