'use strict';

const recurse = require('./index');
require('jest');

describe('loop module', function() {
    it('should check if count is empty', () => {
        expect(recurse.loop(0)).toEqual(null);
    });
    it('should check if count is less than 0', () => {
        expect(recurse.loop(-13)).toEqual('error');
    });
    it('should recursively callback 10 times', () => {
        let iteration = 1;
        recurse.loop(10);
        console.log(iteration);
        expect(iteration).toEqual(10);
    });
});

//last test doesn't pass. I've tried to console.log, but I can't determine if it's offering anything I can use.
