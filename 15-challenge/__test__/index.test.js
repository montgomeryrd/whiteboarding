'use strict';

const Kary = require('../lib/kary');
const wb = require('../index');
require('jest');

describe('#wb.folks', () => {

    let groot = new Kary();
    let test = [ {val:3, children: [] }, {val:2, children: []}];
    
    it('should return an error', () => {
        expect(wb.folks()).toBeInstanceOf(Error);
        expect(wb.folks('carrot sticks')).toBeInstanceOf(Error);
    });
    
    it('should return an array of parents', () => {
        expect(groot).toBeInstanceOf(Kary);
 
        groot.insert(10, 5);
        groot.insert(30, 10);
        groot.insert(40, 10);
        groot.insert(50, 5);
        groot.insert(70, 50);

        let answer = wb.folks(groot);
        
        expect(groot).toEqual({'root': {'children': [{'children': [], 'val': 30}, {'children': [], 'val': 40}], 'val': 10}});
        expect(test).toEqual([ {val:3, children: [] }, {val:2, children: []}]);
        expect(answer.length).toBe(2);
    });
});


