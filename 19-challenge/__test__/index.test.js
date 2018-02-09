'use strict';

const Kary = require('../lib/kary');
const wb = require('../index');
require('jest');



describe('flatEarth', () => {

    let groot = new Kary();
    
    groot.insert(5);
    groot.insert(10, 5);
    groot.insert(30, 10);
    groot.insert(40, 10);
    groot.insert(50, 10);
    groot.insert(45, 5);
    groot.insert(70, 50);

    let root = new Kary();
    root.insert(5);
    root.insert(10, 5);

    describe('Valid results', () => {

        it('should validate input as an instance of the K-ary module', () => {
            expect(groot).toBeInstanceOf(Kary);
        });
        
        it('should check if input has children', () => {
            expect(root.root.children.length).toBe(1);
            expect(groot.root.children.length).toBe(2);
        });

        it('should return the length of a linked list', () => {
            let answer = wb.flatEarth(root);
            expect(answer.length).toBe(2);
            answer = wb.flatEarth(groot);
            expect(answer.length).toBe(7);
        });

        it('should return the values of a linked list', () => {
            let result = wb.flatEarth(groot);
            expect(result).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 70}, 'value': 50}, 'value': 40}, 'value': 30}, 'value': 45}, 'value': 10}, 'value': 5}, 'length': 7});
        });

    });
    
    describe('Invalid results', () => {
        
        it('should return an error', () => {
            expect(wb.flatEarth()).toBeInstanceOf(Error);
        });
    });
});