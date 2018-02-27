'use strict';

const wb = require('../solution');

describe('wb.sect', () => {

    let arr1 = ['even', 2, 6, 7, 9, 14, 17, 19, 24, 28];
    let arr2 = ['odd', 3, 4, 6, 7, 7, 8];
    let arr3 = ['also odd', 4, 6225, 735, 241, 785, 97];
    let arr4 = ['beer', 'potato', 'microphone', 'heroin'];
    let arr5 = ['cabbage', 'fallopian', 'korea'];

    describe('Invalid Input', () => {
        it('should return an Error', () => {
            expect(wb.sect('banana hammock')).toBeInstanceOf(Error);
            expect(wb.sect(3456)).toBeInstanceOf(Error);
        });
    });

    describe('Valid Inpute', () => {
        it('should return the correcct results', () => {
            expect(wb.sect(arr1)).toEqual([9,14]);
            expect(wb.sect(arr2)).toEqual([6]);
            expect(wb.sect(arr3)).toEqual([735]);
            expect(wb.sect(arr4)).toEqual(['potato', 'microphone']);
            expect(wb.sect(arr5)).toEqual(['fallopian']);
        });
    });
});