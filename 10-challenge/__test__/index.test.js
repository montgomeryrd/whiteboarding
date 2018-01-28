'use strict';

const Node = require('../lib/node');
const Stack = require('../lib/stack');
const challenge = require('../lib/index');
require('jest');

// describe('challenge module', () => {

//     let shittyString = new Node ('} No longer {} stranded }like a painted { bird } on a{ fan}');
//     let validString = new Node('{There is something in the way the light comes shining through.}');
    
//     describe('#Test Node', () => {
//         it('should test if new node is an object.', () => {
//             expect(typeof shittyString).toBe('object');
//             expect(typeof validString).toBe('object');
//         });
//     });

//     describe('#checkBrace Valid', () => {
    
//         let stack = new Stack();
//         stack.push(validString);
    
//         it('should check if the input is a valid string', () => {
//             expect(typeof validString.val).toBe('string');
//         });
//         it('should return that something is in the stack', () => {
//             expect(stack.size).toEqual(1);
//         });
//         it('should return that this stack is awesome!', () => {
//             let stack = new Stack();
//             stack.push(validString);
//             expect(challenge.checkBrace(stack)).toEqual('This stack is awesome!');
//         });
//     });

//     describe('#checkBrace Invalid', () => {

//         let stack = new Stack();

//         it('should check for any input and return that the stack is empty', () => {
//             expect(challenge.checkBrace(stack)).toBe('This stack is empty...');
//         });
        
//         it('should return null if nothing is passed in.', () => {
//             expect(challenge.checkBrace()).toBeNull();
//         });

//         let newstack = new Stack();
//         newstack.push(validString);

//         it('should return This stack is awesome!', () => {
//             expect(challenge.checkBrace(newstack)).toBe('This stack is awesome!');
//         });

//         let newerstack = new Stack();
//         newerstack.push(shittyString);
        
//         it('should return This stack sucks.', () => {
//             expect(challenge.checkBrace(newerstack)).toBe('This stack sucks.');
//         });
//     });
// });