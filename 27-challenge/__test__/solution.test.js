'use strict';

const wb = require('../solution');
require('jest');


describe('Invalid', () => {
    it('should return an error', () => {
        expect(wb.rotate()).toBeInstanceOf(Error);
    });
});

describe('Valid Results', () => {

    let test1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
        
    let result1 = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ];

    it('should return a rotated 90 degree array', () => {
        expect(wb.rotate(test1)).toEqual(result1);
    });
});

describe('More Valid Results', () => {

    let test2 = [
        [5, 2, 'g'],
        ['e', 2, 9],
        [5, 'q', 'r'],
    ];
    
    let result2 = [
        [5, 'e', 5],
        ['q', 2, 2],
        ['r', 9, 'g'],
    ];
    
    it('should return a rotated 90 degree array', () => {
        expect(wb.rotate(test2)).toEqual(result2);
    });
});


describe('A Surplus of Valid Results', () => {

    let test3 = [
        ['!', 'You?', 'Swell'],
        ['World', 'Are', 'Am'],
        ['Hello', 'How', 'I'],
    ];
        
    let result3 = [
        ['Hello', 'World', '!'],
        ['How', 'Are', 'You?'],
        ['I', 'Am', 'Swell'],
    ];
    
    it('should return my awesome secret message', () => {
        expect(wb.rotate(test3)).toEqual(result3);
    });
});