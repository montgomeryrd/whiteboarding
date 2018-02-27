'use strict';

const wb = module.exports = {};

wb.intersection = function(arr1, arr2){
    if(!(Array.isArray(arr1)) || !(Array.isArray(arr2))) return new Error('Invalid Input');

    let answer = [];

    for(let a = 0 ; a < arr1.length ; a++){
        for(let b = 0 ; b < arr2.length ; b++){
            if(arr1[a] === arr2[b]){
                answer.push(arr2[b]);
                arr2.splice(b, 1);
                break;
            }
        }
    }
    return answer;
};