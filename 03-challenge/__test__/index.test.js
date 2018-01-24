'use strict';

const total = require('../lib/index');
let thisTrain = {value: 2, next: {value: 5, next: {value:8, next: {value: 3, next: null}}}};

describe('total', () => {
    
    it('should check if any data is being passed', () => {
        expect(total.train()).toBeNull();
    });
    it('should check if what is being passed in is an object', () => {
        expect(thisTrain).toBeInstanceOf(Object);
    });
    it('should total the number of passengers on thisTrain', () => {
        expect(total.train(thisTrain)).toEqual('Total people on this train: 18');
    });
});