'use strict';

const find = require('./index');
require('jest');


describe('find', () => {
    describe('#valid', () => {
        it('should check if input is invalid', () => {
            expect(find()).toEqual('Invalid input');
            expect(find('lumpy', 'po', 'tus')).toEqual('Invalid input');
        });
        it('should check for valid input', () => {
            expect(Array.isArray([1, 2, 3, 5])).toBe(true);
        });
        it('should return the correct answer', () => {
            expect(find([1, 2, 3, 5])).toEqual(4);
            expect(find([1, 2, 3, 4, 5, 6, 8, 9, 10])).toEqual(7);
            expect(find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19])).toEqual(17);
        });

    })
})


