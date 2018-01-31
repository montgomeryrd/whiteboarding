'use strict';

const wb = require('../lib/index');
require('jest');

describe('stacksANDqueues module', () => {
    describe('#twoStackQueue', () => {
        it('should instantiate a queue with two stacks', () => {
            expect(new wb.twoStackQueue()).toEqual({inbox: {top:null, maxSize: 1337, size: 0 }, outbox: {top:null, maxSize: 1337, size: 0 }});
        });
    });

    describe('#twoStackEnqueue', () => {

        let one = new wb.twoStackQueue();
        one.twoStackEnqueue('beer');
        one.twoStackEnqueue('potatoes');

        it('should return a stack called inbox with two nodes, one with value beer, and the other with potatoes', () => {
            expect(one).toEqual(one);
            expect(one.inbox.size).toEqual(2);
            expect(one.inbox.top.val).toEqual('potatoes');
            expect(one.inbox.top.next.val).toEqual('beer');
        });
        it('should also return an outbox stack that is empty and sad with a top of null', () => {
            expect(one.outbox.top).toBeNull();
        });
    });

    describe('#', () => {

        let two = new wb.twoStackQueue();
        two.twoStackEnqueue('pizza');
        two.twoStackEnqueue('pepperoni');
        two.twoStackEnqueue('and');
        two.twoStackEnqueue('cheese');
        two.twoStackDequeue();

        it('should return the outbox with a size of 3', () => {
            expect(two.outbox.size).toEqual(3);
        });

        let three = new wb.twoStackQueue();
        three.twoStackEnqueue('mocha');
        three.twoStackEnqueue('frapp');
        three.twoStackEnqueue('heroin');
        three.twoStackDequeue();
        three.twoStackDequeue();

        it('should return outbox having just one node in it', () => {
            expect(three.outbox.size).toEqual(1);
        });
    });
});