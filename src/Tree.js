const Node = require("./Node");

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  removeDuplicatesAndSort(array) {
    return Array.from(new Set(array)).sort((a, b) => a - b);
  }

  buildTree(array) {
    array = this.removeDuplicatesAndSort(array);

    const build = (arr) => {
      if (arr.length === 0) return null;

      const mid = Math.floor(arr.length / 2);
      const node = new Node(arr[mid]);

      node.left = build(arr.slice(0, mid));
      node.right = build(arr.slice(mid + 1));

      return node;
    };

    return build(array);
  }

  insert(value, node = this.root) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (node === null) return node;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      node.data = this.minValue(node.right);
      node.right = this.deleteItem(node.data, node.right);
    }

    return node;
  }

  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  find(value, node = this.root) {
    if (node === null || node.data === value) return node;

    if (value < node.data) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  levelOrder(callback) {
    const result = [];
    const queue = [];
    if (this.root !== null) queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    if (!callback) return result;
  }

  inOrder(callback, node = this.root, result = []) {
    if (node !== null) {
      this.inOrder(callback, node.left, result);
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
      this.inOrder(callback, node.right, result);
    }

    if (!callback) return result;
  }

  preOrder(callback, node = this.root, result = []) {
    if (node !== null) {
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
      this.preOrder(callback, node.left, result);
      this.preOrder(callback, node.right, result);
    }

    if (!callback) return result;
  }

  postOrder(callback, node = this.root, result = []) {
    if (node !== null) {
      this.postOrder(callback, node.left, result);
      this.postOrder(callback, node.right, result);
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }
    }

    if (!callback) return result;
  }

  height(node) {
    if (node === null) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  depth(node, root = this.root) {
    if (root === null) return -1;
    if (node.data === root.data) return 0;

    const dist =
      node.data < root.data
        ? this.depth(node, root.left)
        : this.depth(node, root.right);
    return dist >= 0 ? dist + 1 : -1;
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    ) {
      return true;
    }

    return false;
  }

  rebalance() {
    const nodes = this.inOrder();
    this.root = this.buildTree(nodes);
  }
}

module.exports = Tree;
