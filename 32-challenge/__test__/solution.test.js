'use strict';

const wb = require('../solution');
require('jest');

describe('fibonacci functions', () => {

    describe('invalid input for both functions', () => {
        it('should return an Error', () => {
            expect(wb.iterate()).toBeInstanceOf(Error);
            expect(wb.iterate('pants')).toBeInstanceOf(Error);
            expect(wb.iterate(-45678)).toBeInstanceOf(Error);
        });
        
        it('should return an Error', () => {
            expect(wb.recurse()).toBeInstanceOf(Error);
            expect(wb.recurse('ham sandwich')).toBeInstanceOf(Error);
            expect(wb.recurse(-9876)).toBeInstanceOf(Error);
        });
    });

    describe('valid input for both functions', () => {
        it('should return expected', () => {
            expect(wb.iterate(4)).toEqual(3);
            expect(wb.iterate(6)).toEqual(8);
            expect(wb.iterate(8)).toEqual(21);
        });

        it('should return expected', () => {
            expect(wb.recurse(5)).toEqual(5);
            expect(wb.recurse(7)).toEqual(13);
            expect(wb.recurse(9)).toEqual(34);
        });
    });
});