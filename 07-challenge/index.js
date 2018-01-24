'use strict';

const typeOf = module.exports = {};

typeOf.list = function(data) {
    if(!data || typeof data !== 'object'){ //If there is no data or the data is not an object
        return null; //return null
    }
    let copy = Object.assign(data); //make a copy of the data to a new variable called copy 
    while (copy) { //while the copy list is... the copy list
        if(copy.seen){ //check if copy has a property of seen
            return true; //return true if so
        } else { //or else
            copy.seen = true; //add a property called seen with the value true
            copy = copy.next || copy.head; //iterate to next node
        }
    }
    return false; //return false if there's no more copy
};