'use strict';

const BinaryTree = require('../lib/modules').BinaryTree;
const TreeNode = require('../lib/modules').TreeNode;
// const SinglyLinkedList = require('../lib/modules').SinglyLinkedList;
// const Node = require('../lib/modules').Node;

const wb = require('../solution');
require('jest');

describe('Solution', () => {

    let binaryTree = new BinaryTree();
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    let six = new TreeNode(6);
    let seven = new TreeNode(7);
    let eight = new TreeNode(8);
    let nine = new TreeNode(9);
    
    binaryTree.root = one;
    
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    describe('invalid input', () => {
        it('should return an error', () => {
            expect(wb.solution()).toBeInstanceOf(Error);
        });

        it('should return an error', () => {
            let nulltree = new BinaryTree();
            expect(wb.solution(nulltree)).toBeNull();
        });

        it('should return an error', () => {
            expect(wb.solution('blep')).toBeInstanceOf(Error);
        });
    });

    describe('valid input', () => {
        it('should return a sorted Singly Linked List', () => {
            expect(wb.solution(binaryTree)).toEqual({"head": {"next": {"next": {"next": {"next": {"next":{"next": {"next": {"next": {"next": null, "value": 9}, "value": 8}, "value": 7}, "value": 6}, "value": 5}, "value": 4},"value": 3}, "value": 2}, "value": 1}, "length": 9});
        });
    });
});


