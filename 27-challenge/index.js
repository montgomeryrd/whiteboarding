'use strict';

let wb = module.exports = {};

wb.rotate = function(array){
    if (!array || !(array instanceof Array) || !array.length) return new TypeError('Input sucks');

    let newArray = Array(array.length);
    // console.log(newArray);
    for (let x in array) {
        if (!array[x] || !(array[x] instanceof Array) || array[x].length !== array.length) return new TypeError(`Array[${x}] is invalid`);
        for (let y in array[x]) {
            if (!newArray[y]) newArray[y] = Array(array.length);
            // console.log('before ', newArray)
            newArray[y][array.length - 1 - x] = array[x][y];
            // console.log('after ', newArray)
        }
    }
    return newArray;
};