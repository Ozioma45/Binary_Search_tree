# Balanced Binary Search Tree

This project implements a balanced Binary Search Tree (BST) in JavaScript, designed as part of the Full Stack JavaScript Odin Project curriculum. The BST supports various operations such as insertion, deletion, traversal (in-order, pre-order, post-order, level-order), balancing, and checking for balance.

## Features

- **BST Operations**: Implementations include insertion, deletion, and search functionalities for maintaining and manipulating the tree structure.
- **Traversal Methods**: Supports traversal methods including in-order, pre-order, post-order, and level-order traversal to access tree nodes in different sequences.
- **Balancing**: Provides a `rebalance` function to ensure the tree remains balanced, optimizing search and insert/delete operations.
- **Visualization**: Includes a `prettyPrint` function to visually represent the tree structure in the console.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/balanced-bst.git
   ```
2. Navigate to the project directory:
   ```bash
   cd balanced-bst
   ```

### Usage

1. Run the project:
   ```bash
   node src/index.js
   ```
2. Follow the console instructions to interact with the BST operations and observe the results.

## Example Usage

```javascript
// Example usage of the BST functionalities

const Tree = require("./src/Tree");
const prettyPrint = require("./src/prettyPrint");
const generateRandomArray = require("./utils/generateRandomArray");

// Create a binary search tree from an array of random numbers < 100
const randomArray = generateRandomArray(15, 100);
const tree = new Tree(randomArray);

// Confirm that the tree is balanced
console.log("Is the tree balanced? ", tree.isBalanced());

// Print out all elements in level, pre, post, and in order
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("Post Order: ", tree.postOrder());
console.log("In Order: ", tree.inOrder());

// Unbalance the tree by adding several numbers > 100
[101, 102, 103, 104, 105].forEach((num) => tree.insert(num));

// Confirm that the tree is unbalanced
console.log("Is the tree unbalanced? ", !tree.isBalanced());

// Balance the tree
tree.rebalance();

// Confirm that the tree is balanced again
console.log("Is the tree balanced again? ", tree.isBalanced());

// Print out all elements in level, pre, post, and in order after rebalancing
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("Post Order: ", tree.postOrder());
console.log("In Order: ", tree.inOrder());

// Pretty print the tree structure
prettyPrint(tree.root);
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- This project was completed as part of the Full Stack JavaScript Odin Project curriculum.
- Special thanks to the Odin Project community and contributors.
