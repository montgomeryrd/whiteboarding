'use strict';

const Node = require('./node');

module.exports.SinglyLinkedList = class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        return this;
    }

    insertEnd(value) {
        let newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        
        for(var itr = this.head ; itr.next ; itr = itr.next);
        itr.next = newNode;
        this.length++;
        return this;
    }
};

module.exports.TreeNode = class TreeNode {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

module.exports.BinaryTree = class BinaryTree{
    constructor(root=null){
        this.root = root;
        this.inOrder = [];
    }

    inOrderTraversal(){
        if(!this.root)
            return null;
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(root){
        if(root === null)
            return null;
        this._inOrderTraversal(root.left);
        this.inOrder.push(root.value);
        this._inOrderTraversal(root.right);
    }
};