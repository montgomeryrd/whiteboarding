'use strict';

const sll = require('./sll');
const intersect = module.exports = {};

intersect.list = function(one, two) {

    if(!one || !two) return null;
    if(typeof one !== 'object' || typeof two !== 'object') return null;
    
    let list = {};
    let result = new sll();    
    let current = one.head;

    while(current) {
        if(!current.value) return null;

        list[current.value] = true;
        current = current.next;
    }

    current = two.head;

    while(current) {
        if(!current.value) return null;
        if(list[current.value]) {
            result.insertEnd(current.value);
        }
        current = current.next;
    }
    return result;
};