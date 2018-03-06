'use strict';

const BinaryTree = require('./lib/modules').BinaryTree;
// const TreeNode = require('./lib/modules').TreeNode;
const SinglyLinkedList = require('./lib/modules').SinglyLinkedList;
// const Node = require('./lib/modules').Node;

const wb = module.exports = {};

wb.solution = function(binaryTree){

    if(!binaryTree) return new Error('Requires a Binary Tree');
    if(binaryTree.root === null) return null;
    if(!(binaryTree instanceof BinaryTree)) return new Error('Requires a Binary Tree');
   
    binaryTree.inOrderTraversal();

    binaryTree.inOrder.sort(function(a, b){
        return a - b;
    });

    let SLL = new SinglyLinkedList();

    for(let i = 0 ; i < binaryTree.inOrder.length ; i++){
        SLL.insertEnd(binaryTree.inOrder[i]);
    }
    return SLL;
};