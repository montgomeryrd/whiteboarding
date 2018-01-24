'use strict';

const typeOf = require('./index');
require('jest');
let list1 = {head: {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: this.head} } } } } };
let list2 = {head: {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null} } } } } };


describe('Type Of module', () => {
    describe('#typeOf', () =>{
        it('should check if an argument is passed', () => {
            expect(typeOf.list()).toBeNull();
        });
        it('should check if argument is valid', () => {
            expect(typeOf.list('korea')).toBeNull();
        });
        it('should check if argument is an object', () => {
            expect(list1).toBeInstanceOf(Object);
            expect(list2).toBeInstanceOf(Object);
        });
        it('should return true if list1 is circular', () => { //I can't figure out this one.
            expect(typeOf.list(list1)).toBe(true);
        });
        it('should check if list2 is linear', () => {
            expect(typeOf.list(list2)).toBe(false);            
        });
    });
});

