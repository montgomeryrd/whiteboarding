'use strict';

const find = module.exports = {};

find.middle = function(list) {
    if(!list || !list.head) {
        return null;
    }

    let total = 1;
    let node = list.head;

    for(let itr = list.head ; itr.next ; itr = itr.next) {
        total++;
    }
    total = Math.ceil(total/2);

    for (let i = 0 ; i < total ; i++) {
        if(i === total - 1) {
            return node;
        }
        node = node.next;
    }
};