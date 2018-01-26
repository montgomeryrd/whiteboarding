'use strict';

const nd = require('./nd');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        return this; // O(1)
    }

    insertEnd(value) {
        let newNode = new nd(value);
        
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        
        for(var itr = this.head ; itr.next ; itr = itr.next);
        itr.next = newNode;
        this.length++;
        return this; // O(1), if it's only one node. O(n), if it iterates to the end.
    }
}

module.exports = SinglyLinkedList;