'use strict';

const recurse = module.exports = {};

recurse.loop = function(count, callback) {
    if(!count || count < 1 || typeof count !== 'number' || !callback) {
        return null;
    } else if(count > 0) {
        count--;
    }
    return (count, callback());
};

