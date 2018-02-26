'use strict';

const wb = require('../solution');
require('jest');

describe('wb.anagrams', () => {

    describe('invalid input', () => {
        let array = 'pedestrian shoe';

        it('should hate your invalid input', () => {
            expect(wb.anagrams()).toBeInstanceOf(Error);
            expect(wb.anagrams('carrot sticks')).toBeInstanceOf(Error);
            expect(wb.anagrams(array)).toBeInstanceOf(Error);
        });
    });

    describe('valid input', () => {
        let array1 = ['star', 'tars', 'potato', 'arts', 'rats', 'war', 'tsar', 'raw'];
        let array2 = ['bear', 'pat', 'christmas', 'tap', 'apt', 'bare'];
        let array3 = ['ball', 'santa', 'pochahontus'];

        it('should do its thing with your valid input, returning valid results', () => {
            expect(wb.anagrams(array1)).toEqual([ 'star', 'tars', 'arts', 'rats', 'tsar', 'potato', 'war', 'raw' ]);
            expect(wb.anagrams(array2)).toEqual([ 'bear', 'bare', 'pat', 'tap', 'apt', 'christmas' ]);
            expect(wb.anagrams(array3)).toEqual([ 'ball', 'santa', 'pochahontus' ]);
        });
    });
});

