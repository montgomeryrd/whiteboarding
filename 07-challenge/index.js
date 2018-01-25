'use strict';

const typeOf = module.exports = {};

typeOf.list = function(data) {
    if(!data || typeof data !== 'object'){ //If there is no data or the data is not an object
        return null; //return null
    }
 
    let copy = Object.assign({}, data); //make a copy of the data to a new variable called copy 
 
    while(copy.head) { //while the copy list is... the copy list
        copy = copy.head;

        while(copy.next) {
            copy = copy.next;
        
            if(copy.next === copy.head){ //check if copy has a property of seen
                return true; //return true if so
            }
            return false; //return false if there's no more copy
        }
    }
};