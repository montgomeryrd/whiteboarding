'use strict';

const Node = require('../lib/node');
const Stack = require('../lib/stack');
const Queue = require('../lib/queue');

const wb = module.exports = {};

wb.twoStackQueue = class {
    constructor() {
        this.inbox = new Stack();
        this.outbox = new Stack();
    }

    twoStackEnqueue(val) {
        //push all new values to the enqueue stack
        this.inbox.push(val);
        return this.inbox;
    }
    
    twoStackDequeue() { 
        //if both stacks are empty, return null
        if(!this.outbox.top && !this.inbox.top) return null;
        
        
        //pushes inbox stack to outbox stack
        while(this.inbox.top) {
            this.outbox.push(this.inbox.pop());
        }

        //pop off from outbox stack
        return this.outbox.pop();
    }
};