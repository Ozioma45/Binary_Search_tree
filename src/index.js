const Tree = require("./Tree");
const prettyPrint = require("./prettyPrint");
const generateRandomArray = require("../utils/generateRandomArray");

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

// Confirm that the tree is balanced
console.log("Is the tree balanced again? ", tree.isBalanced());

// Print out all elements in level, pre, post, and in order
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("Post Order: ", tree.postOrder());
console.log("In Order: ", tree.inOrder());

// Pretty print the tree
prettyPrint(tree.root);
