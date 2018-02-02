'use strict';

const Node = require('../lib/nd');
const SLL = require('../lib/sll');
const STACK = require('../lib/stack');
const wb = require('../index');
require('jest');


let list1 = new SLL();
list1.insertEnd('banana');
list1.insertEnd('korea');
list1.insertEnd('squirrel');
list1.insertEnd('korea');
list1.insertEnd('korea');
list1.insertEnd('retreat');

let list2 = new SLL();
list2.insertEnd('korea');

let list3 = new SLL();
list3.insertEnd(10);
list3.insertEnd(20);
list3.insertEnd(30);

let validate = new SLL();
validate.insertEnd('banana');
validate.insertEnd('squirrel');
validate.insertEnd('korea');
validate.insertEnd('retreat');


describe('14-challenge', () => {
    describe('#dedupe', () => {

        it('should check if input is valid', () => {
            expect(list1.length).toBe(6);
            expect(list1).toBeInstanceOf(SLL);
            expect(list2).toBeInstanceOf(SLL);
            expect(list3).toBeInstanceOf(SLL);
        });
        it('should return error', () => {
            expect(wb.dedupe(7)).toBeInstanceOf(Error);
            expect(wb.dedupe('potato')).toBeInstanceOf(Error);
            expect(wb.dedupe()).toBeInstanceOf(Error);      
        });
        it.only('should return sll', () => {
            let sll = new SLL;
            let stack = new STACK;
            let curr = list1.head;
            
            while(list1 !== 0){
                let counter = 0;
                
                if(!curr) return;
                
                stack.push(list1.head.value);
                list1.remove(1);
        
                
                while(curr){
                    counter++;

                    if(stack.top.value === curr.value) {
                        list1.remove(counter);
                        counter--;
                    }
                    curr = curr.next;
                }

            }
            
            while(stack.top){
                sll.insertEnd(stack.pop().value);
            }
            
            expect(sll.length).toEqual(4);
            expect(sll).toEqual(validate);
            // expect(wb.dedupe(list1)).toEqual(validate);
        });
    });
});