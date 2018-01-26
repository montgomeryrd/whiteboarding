'use strict';

const nth = require('../lib/index');
const sll = require('../lib/sll');
require('jest');

let list = new sll();

list.insertEnd(43);
list.insertEnd(1);
list.insertEnd(36);
list.insertEnd(52);
list.insertEnd(12);
list.insertEnd(75);
list.insertEnd(188);

console.log('list: ', list);
console.log(nth.go(5, list));
console.log(nth.go(4, list));
console.log(nth.go(3, list));


describe('nth module', () => {
    describe('#Valid Results', () => {

        it('should return nth from the end of the list', () => {
            expect(nth.go(5, list)).toEqual(36);
            expect(nth.go(4, list)).toEqual(52);
            expect(nth.go(3, list)).toEqual(12);
        });
    });
    
    describe('Invalid Results', () => {
        
        it('should return null if missing arguments', () => {
            expect(nth.go(list)).toEqual(null);
            expect(nth.go(12)).toEqual(null);
        });

        it('should return null for invalid input', () => {
            expect(nth.go(6, 'korea')).toEqual(null);
            expect(nth.go('banana', 'hammock')).toEqual(null);
        });

        it('should return error if there if the value of n is greater than the number of nodes in the list', () => {
            expect(nth.go(1080, list)).toBe('There isn\'t an nth node in list');
            expect(nth.go(2356, list)).toBe('There isn\'t an nth node in list');
            expect(nth.go(10832636, list)).toBe('There isn\'t an nth node in list');
        });
    });
});