'use strict';

const wb = module.exports = {};

wb.iterate = function(nth){
    if(!nth || nth < 0 || !Number.isInteger(nth)) return new Error('Invalid Input');
    let sequence = [0, 1];
    for(let i = 0 ; i < nth ; i++){
        sequence.push(sequence[i] + sequence[i + 1]);
    }
    return sequence[nth];
};

wb.recurse = function(nth){
    if(nth === 0 || nth === 1) return nth;
    if(!nth || nth < 0 || !Number.isInteger(nth)) return new Error('Invalid Input');
    return wb.recurse(nth - 1) + wb.recurse(nth - 2);
};