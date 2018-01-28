'use strict';

// const Stack = require('./stack');
const challenge = module.exports = {};

//This function takes a stack as its input and pops off each element to check its value for pairs of ordered curly braces => { }.
challenge.checkBrace = function(stack) {

    if(!stack) return null;

    if(stack.top === null) return 'This stack is empty...';

    for(let h = 0 ; stack.size > 0 ; h++) {

        let array = [];
        let top = stack.pop();
        let object = top.val;
        object = `'${object.val}'`;
        object = object.split('');

        for(let i = 0 ; i < object.length ; i++) {
            if(object[i] === '{') array.push(object[i]);
            if(object[i] === '}') array.push(object[i]);
        }

        if(array[0] === '}' || array[array.length - 1] === '{') return 'This stack sucks.';
    }

    if(stack.size === 0) return 'This stack is awesome!';
    
};


//fuck... I wrote a function that makes pairs of curly braces by taking them out of strings. Keeping it just in case this is useful some other time.
// challenge.checkBrace = function(string) {

//     if(!string || typeof string !== 'string') {
//         return 'wrong input';
//     }
    
//     let pairs = [];
//     let search = string.split('');
    
//     for(let i = 0 ; i < search.length ; i++) {
//         if(search[i] === '{') {
//             if(pairs[pairs.length - 1] !== '{') pairs.push(search[i]);
//         } else if(search[i] === '}') {
//             if(pairs[pairs.length - 1] === '{') pairs.push(search[i]); 
//         }
//     }

//     if(pairs[pairs.length - 1] === '{') pairs.pop();
    
//     let answer = [];

//     while(pairs.length !== 0) {
//         answer.push(pairs[0] + pairs[1]);
//         pairs.shift();
//         pairs.shift();
//     }

//     if(answer.length > 0) {
//         return answer;
//     } else {
//         return null;
//     }
// };


//This function takes in two arguments, a number and an array of numbers, and does a binary search to locate the number inside the array. 
challenge.binarySearch = function(n, array) {
    if(!n || !array) return 'Not valid input';
    if(typeof n !== 'number' || !Array.isArray(array)) return 'Not valid input';

    for(let i = 0 ; i < array.length ; i++){
        if(typeof array[i] !== 'number') return 'Not valid input';
    }
    //I don't know how to check if it's sorted so... sort it just in case.
    array.sort(function(a, b) {
        return a - b;
    });

    let min = 0;
    let max = array.length - 1;
    let here;

    while(min <= max) {
        here = Math.floor((max + min)/2);
        if(array[here] === n) return {value: n, index: here};
        if(array[here] < n) min = here + 1; 
        if(array[here] > n) max = here - 1;
    }

    return null;
};