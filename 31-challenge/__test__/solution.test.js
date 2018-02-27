'use strict';

const wb = require('../solution');

describe('wb.intersection', () => {

    let arr1 = [1, 2, 6, 7, 9, 14, 17, 19, 24, 28];
    let arr2 = [3, 3, 4, 6, 7, 7, 8];
    let arr3 = [3, 4, 6225, 7, 735, 241, 785, 97];
    let arr4 = ['beer', 'korea', 'microphone', 'heroin'];
    let arr5 = ['cabbage', 'fallopian', 'korea', 'microphone'];

    describe('Invalid Input', () => {
        it('should return an Error', () => {
            expect(wb.intersection('banana hammock')).toBeInstanceOf(Error);
            expect(wb.intersection(arr1)).toBeInstanceOf(Error);
        });
    });

    describe('Valid Inpute', () => {
        it('should return the correct results', () => {
            expect(wb.intersection(arr1, arr2)).toEqual([ 6, 7 ]);
            expect(wb.intersection(arr2, arr3)).toEqual([ 3, 4, 7 ]);
            expect(wb.intersection(arr3, arr4)).toEqual([ ]);
            expect(wb.intersection(arr4, arr5)).toEqual([ 'korea', 'microphone' ]);
        });
    });
});