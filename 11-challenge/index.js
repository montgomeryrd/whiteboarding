'use strict';

module.exports = function(array) {

    if(!array || !Array.isArray(array)) return 'Invalid input';

    array.sort(function(a, b) {
        return a - b;
    });

    for(let i = 0 ; i < array.length ; i++) {
        if((i + 1) !== array[i]) return i + 1;
    }
};