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
        expect(groot).toBeInstanceOf(Kary);
    });
    
    it('should return an array of parents', () => {
 
        groot.insert(10, 5);
        groot.insert(30, 10);
        groot.insert(40, 10);
        groot.insert(50, 5);
        groot.insert(70, 50);

        console.log(wb.folks(groot));
        console.log('log: ', groot);
          

        expect(test).toEqual('[ {val:3, children: [] }, {val:2, children: []}]');
    });
});


