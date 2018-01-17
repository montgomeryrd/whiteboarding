'use strict'

const solution = require('../solution')

describe('solution', function(){
    it('should start with the <engine> and traverse the train, console logging passengers of each car', () => {
    expect(traverse(engine)).toEqual(12);
    expect(traverse(engine)).toNotEqual('hello world');
    })
});

const car4 = {passengers: 0, next: null};
const car3 = {passengers: 2, next: car4};
const car2 = {passengers: 6, next: car3};
const car1 = { passengers: 2, next: car2};  
const engine = { passengers: 2, next: car1};

traverse(engine);