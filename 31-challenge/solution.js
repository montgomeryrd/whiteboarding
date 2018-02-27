'use strict';

const wb = module.exports = {};

wb.sect = function(array){

    if(!(Array.isArray(array))) return new Error('Invalid Input');
 
    let i = (array.length/2);

    if(Number.isInteger(i)){
        return [array[i - 1], array[i]];
    } else {
        i = Math.floor(i);
        return [array[i]];
    }
};