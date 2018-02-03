'use strict';

const SLL = require('./lib/sll');
const STACK = require('./lib/stack');
const wb = module.exports = {};


wb.dedupe = function(list) {
    if(!list || !(list instanceof SLL)) return new Error('Input Requires a Linked List');
    if(!list.next) return list;
    
    // let sll = new SLL;
    // let stack = new STACK;
    // let curr = list.head;
    
    // while(list !== 0){
    //     let counter = 0;
        
    //     if(!curr) return;
    //     stack.push(list.head.value);
    //     list.remove(1);

        
    //     while(curr){
    //         counter++;

    //         if(stack.top.value === curr.value) {
    //             list.remove(counter);
    //             counter--;
    //         }
    //         curr = curr.next;
    //     }

    // }
    
    // while(stack.top){
    //     sll.insertEnd(stack.pop().value);
    // }
    
};