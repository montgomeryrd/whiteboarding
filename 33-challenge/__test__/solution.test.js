'use strict';

const wb = require('../solution');
require('jest');

describe('doathing', () => {

    describe('Invalid Input', () => {
        it('should no take your shit!', () => {
            expect(wb.doathing()).toBeInstanceOf(Error);
        });

        it('doesn\'t take in string values', () => {
            expect(wb.doathing('potato')).toBeInstanceOf(Error);
            expect(wb.doathing(3, 'burrito')).toBeInstanceOf(Error);
            expect(wb.doathing('2', '15')).toBeInstanceOf(Error);
        });
    });

    describe('Valid Input', () => {
        it('should return expected', () => {
            expect(wb.doathing(2, 15)).toEqual('Answer: 2^15th = 32768, Sum: 26');
        });

        it('should return expected', () => {
            expect(wb.doathing(3, 3)).toEqual('Answer: 3^3th = 27, Sum: 9');
        });

        it('should return expected', () => {
            expect(wb.doathing(5, 20)).toEqual('Answer: 5^20th = 95367431640625, Sum: 61');
        });
    });
});