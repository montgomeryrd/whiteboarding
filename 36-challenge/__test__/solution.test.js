'use strict';

const wb = require('../lib/solution');

describe('wb.compare', () => {
  
    let test1 = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    };
    
    let test2 = {
        value: 1,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right: null
        }
    };
  
    let test3 = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    };
    
    describe('invalid input', () => {

        it('should return null because there is no input', () => {
            expect(wb.compare()).toBeNull();
        });

        it('should return null because the args are not Binary Trees', () => {
            expect(wb.compare('turnip', 18)).toBeNull();
        });

        it('should return false because it requires TWO BTs', () => {
            expect(wb.compare(test1, 'belly rubs')).toBe(false);
        });
    });

    describe('valid input', () => {

        it('should return false after comparing structures', () => {
            expect(wb.compare(test1, test2)).toBe(false);
        });

        it('should return true after comparing identical data structures', () => {
            expect(wb.compare(test1, test1)).toBe(true);
        });

        it('should return false after comparing data structures', () => {
            expect(wb.compare(test2, test3)).toBe(false);
        });
    });
});