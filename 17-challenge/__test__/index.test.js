'use strict';

const Kary = require('../lib/kary');
const wb = require('../index');
require('jest');

describe('#wb.folks', () => {

    let groot = new Kary();
    
    groot.insert(5);
    groot.insert(10, 5);
    groot.insert(30, 10);
    groot.insert(40, 10);
    groot.insert(50, 5);
    groot.insert(70, 50);

    it('should return an error', () => {
        expect(wb.sum()).toBeInstanceOf(Error);
        expect(wb.sum('carrot sticks')).toBeInstanceOf(Error);
    });
    
    it('should validate input as an instance of the K-ary module', () => {
        expect(groot).toBeInstanceOf(Kary);
    });

    it('should return the sum of tree node values', () => {
        console.log(groot);
        expect(wb.sum(groot)).toEqual(205);
    });
});