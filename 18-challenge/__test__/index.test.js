'use strict';

const Kary = require('../lib/kary');
const wb = require('../index');
require('jest');

describe('#wb.noCondoms', () => {

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

    it('should return an error', () => {
        expect(wb.noCondoms()).toBeInstanceOf(Error);
        expect(wb.noCondoms('carrot sticks')).toBeInstanceOf(Error);
    });
    
    it('should validate input as an instance of the K-ary module', () => {
        expect(groot).toBeInstanceOf(Kary);
    });

    it('should check if input has children', () => {
        expect(root.root.children.length).toBe(1);
        expect(groot.root.children.length).toBe(2);
    });

    it('should return the value of the node with the most children', () => {
        let answer = wb.noCondoms(groot);
        expect(answer.val).toEqual(10);
        answer = wb.noCondoms(root);
        expect(answer.val).toEqual(5);
    });
});