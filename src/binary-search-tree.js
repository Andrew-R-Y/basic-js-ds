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

  has(data) {
    if (!this.rootEl || !data) {
      return false;
    }
    let current = this.rootEl;
    let result = false;
    function checkData(element) {
      if (data === element.data) {
        result = true;
        return;
      }
      if (data < element.data) {
        if (element.left) {
          checkData(element.left);
        } else return false;
      } else {
        if (element.right) {
          checkData(element.right);
        } else return false;
      }
    }

    checkData(current);
    return result;
  }

  find(data) {
    if (!this.rootEl || !data) {
      return null;
    }
    let current = this.rootEl;
    let result = null;
    function checkData(element) {
      if (data === element.data) {
        result = element;
        return;
      }
      if (data < element.data) {
        if (element.left) {
          checkData(element.left);
        } else return false;
      } else {
        if (element.right) {
          checkData(element.right);
        } else return false;
      }
    }

    checkData(current);
    return result;
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
