'use strict';

const wb = module.exports = {};

wb.sect = function(arr1, arr2){
    if(!(Array.isArray(arr1)) || !(Array.isArray(arr2))) return new Error('Invalid Input');

    for(let a = 0 ; a < arr1.length ; a++){
        for(let b = 0 ; b < arr2.length ; b++){
            if(arr1[a] === arr2[b] && arr1[a + 1] === arr2[b + 1]){
                return [arr1[a], arr1[a + 1]];
            }
        }
    }
    return 'No intersection';
};