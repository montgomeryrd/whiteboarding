'use strict';

const nth = module.exports = {};

nth.go = function(n, list) {

    if(!n || !list) return null;
    if(typeof n !== 'number' || typeof list !== 'object') return null;

    let total = 1;
    let node = list.head;

    for(let itr = list.head ; itr.next ; itr = itr.next) {
        total++;
    }

    if(n > total) {
        return 'There isn\'t an nth node in list';
    }

    let answer = total - n;

    for(let i = 0 ; i < total ; i++) {
        if(i === answer) {
            return node.value;
        }
        node = node.next;
    }

};