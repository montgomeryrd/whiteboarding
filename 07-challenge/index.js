'use strict';

const typeOf = module.exports = {};

typeOf.list = function(data) {
    if(!data || typeof data !== 'object'){
        return null; 
    }

    let copy = Object.assign({}, data); 
    
    while (copy.head) { 
        copy = copy.head;

        while(copy.next) {
            copy = copy.next;
            if(copy.next === copy.head) {
                return true;
            }
            return false;
        }
    }
};