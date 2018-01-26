'use strict';

const intersect = require('../lib/index');
const sll = require('../lib/sll');
require('jest');

let one = new sll();
let two = new sll();

one.insertEnd(43);
one.insertEnd(1);
one.insertEnd(36);
one.insertEnd(32);

two.insertEnd(1);
two.insertEnd(47);
two.insertEnd(4);
two.insertEnd(32);

console.log('one: ', one);
console.log('two: ', two);

describe('intersect module', () => {
    describe('#Valid Results', () => {
        it('should check if input are valid lists', () => {
            expect(one).toBeInstanceOf(Object);
            expect(two).toBeInstanceOf(Object);
        });

        it('should return the correct intersections of the lists', () => {
            expect(intersect.list(one, two)).toEqual({head: {value: 1, next: {value: 32, next: null}}, length: 2});
        });
    });
    
    describe('Invalid Results', () => {
        
        it('should return null for invalid input', () => {
            expect(intersect.list('korea')).toEqual(null);
            expect(intersect.list()).toEqual(null);
        });
    });
});