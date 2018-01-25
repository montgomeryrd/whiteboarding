'use strict';

const recurse = require('./index');
require('jest');


describe('loop module', function() {
    it('should check if count is empty', () => {
        expect(recurse.loop(0)).toBeNull();
    });
    it('should check if count is less than 0', () => {
        expect(recurse.loop(-13)).toBeNull();
    });
    it('should make sure count is a number', () => {
        expect(recurse.loop('beer')).toBeNull();
        expect(recurse.loop([])).toBeNull();
    });
    it('should recursively callback 40 times', () => {
        expect(recurse.loop(40)).toEqual(null);
    });
});