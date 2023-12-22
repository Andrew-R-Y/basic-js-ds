const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    function makeNode(value) {
      let result = {};
      result.data = value;
      result.left = null;
      result.right = null;
      return result;
    }
    const root = this.rootEl;
    if (!root) {
      this.rootEl = makeNode(data);
    } else {
      let current = root;
      function addItem(current) {
        if (current.data === data) {
          return;
        }
        if (data < current.data) {
          if (!current.left) {
            current.left = makeNode(data);
          } else {
            addItem(current.left);
          }
        } else {
          if (!current.right) {
            current.right = makeNode(data);
          } else {
            addItem(current.right);
          }
        }
      }

      addItem(current);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootEl) {
      return false;
    }
    let current = this.rootEl;
    while (current.left) {
      current = current.left;
    }
    let result = current.data;
    return result;
  }

  max() {
    if (!this.rootEl) {
      return false;
    }
    let current = this.rootEl;
    while (current.right) {
      current = current.right;
    }
    let result = current.data;
    return result;
  }
}

module.exports = {
  BinarySearchTree,
};
