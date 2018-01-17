'use strict';

let numbers = [4, 2, 6, 62, 55, 15, 32];

function highestNums(){
    let array = numbers.sort(function(a, b) {
        return b - a;
    });
    
    return {
        highest: array[0],
        lesshighest: array[1]
    };
};

