'use strict';

const wb = require('../solution');

describe('wb.sect', () => {

    let arr1 = [1, 2, 6, 7, 9, 14, 17, 19, 24, 28];
    let arr2 = [3, 3, 4, 6, 7, 7, 8];
    let arr3 = [3, 4, 6225, 735, 241, 785, 97];
    let arr4 = ['beer', 'korea', 'microphone', 'heroin'];
    let arr5 = ['cabbage', 'fallopian', 'korea', 'microphone'];

    describe('Invalid Input', () => {
        it('should return an Error', () => {
            expect(wb.sect('banana hammock')).toBeInstanceOf(Error);
            expect(wb.sect(arr1)).toBeInstanceOf(Error);
        });
    });

    describe('Valid Inpute', () => {
        it('should return the correcct results', () => {
            expect(wb.sect(arr1, arr2)).toEqual([6, 7]);
            expect(wb.sect(arr2, arr3)).toEqual([3, 4]);
            expect(wb.sect(arr4, arr5)).toEqual(['korea', 'microphone']);
        });
    });
});