'use strict';

class Node { 
    constructor(value) {
        this.value = value;
        this.next = null;
        return this; // O(1)
    }
}

module.exports = Node;