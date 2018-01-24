'use strict';

const intersect = require('./solution');

describe('solution', function(){
    it('should take in two arrays and return intersecting values', () => {
        expect(intersect(["mike", "sue", "tom", "kathy", "henry"], ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"])).toEqual(["sue", "kathy"]);
    });
    it('should take in two arrays and return intersecting values', () => {
        expect(intersect(["mike", "sue", "tom", "kathy", "henry"], ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"])).not.toEqual(["Korean", "Freeze-Ray"]);
    });
    it('should take in two arrays and return intersecting values', () => {
        expect(intersect([], ["toga", "panda"])).toEqual(null);
    });
    it('should take in two arrays and return intersecting values', () => {
            expect(intersect(["kidnapped", "by", "danger"],["muffin", "top"])).toEqual(null);
    });
});

