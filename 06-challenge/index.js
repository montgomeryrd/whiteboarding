'use strict';

const recurse = module.exports = {};

let iteration = 0;

recurse.loop = function(count, callback) {
    if(count < 0) {
        return 'error';
    } else if (count === 0) {
        return null;
    } else if (iteration < count){
        iteration++;
        console.log(iteration);
        return loop(count, callback);
    }
};


// 1. *Write a recursive function called loop that has the function signature*
//      `(count, callback) => undefined`
//       It should call the `callback` `count` times (`count` is expected to be > 0)