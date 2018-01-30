'use strict';

const calculateMissing = require('./index');
require('jest');


describe('calculateMissing', () => {
    describe('#valid', () => {
        it('should check if input is invalid', () => {
            expect(calculateMissing()).toEqual('Invalid input');
            expect(calculateMissing('lumpy', 'po', 'tus')).toEqual('Invalid input');
        });
        it('should check for valid input', () => {
            expect(Array.isArray([1, 2, 3, 5])).toBe(true);
        });
        it('should return the correct answer', () => {
            expect(calculateMissing([1, 2, 3, 5])).toEqual(4);
            expect(calculateMissing([1, 2, 3, 4, 5, 6, 8, 9, 10])).toEqual(7);
            expect(calculateMissing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19])).toEqual(17);
        });

    })
})


