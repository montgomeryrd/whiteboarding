'use strict';

const find = require('./solution');
require('jest');

let list = {head: {value:'chips', next: {value:'pork', next: {value:'korea', next: {value:'murder', next: {value:'function', next: {value:'normal', next: null}}}}}}};

describe('mid module', () => {
    describe('#middle', () => {
        it('should check if there is a valid list', () => {
            expect(find.middle()).toBeNull();
        });
        it('should return null for an object that is not a linked list', () => {
            expect(find.middle({})).toBeNull();
            expect(find.middle('beer nuts')).toBeNull();
        });
        it('should return a valid node object in a valid linked list', () => {
            expect(find.middle(list)).toBe(list.head.next.next);
        });
    });
});
