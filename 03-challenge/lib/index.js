'use strict';

const total = module.exports = {};

total.train = function(data) {
    if(!data || typeof data !== 'object'){
        return null;
    }

    var people = 0;
    
    while(data){
        people += data.value;
        data = data.next;
    }
    return `Total people on this train: ${people}`;
};