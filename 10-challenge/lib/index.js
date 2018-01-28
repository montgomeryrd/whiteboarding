'use strict';

// const Stack = require('./stack');
const challenge = module.exports = {};

challenge.checkBrace = function(stack) {

    // let stack = new Stack();
    if(!stack) return null;

    if(stack.top === null) return 'This stack is empty...';

    let top = stack.pop();
    let object = top.val;
    object = `'${object.val}'`;
    object = object.split('');

    for(let i = 0 ; i < object.length ; i++) {
        if(object[i] === '{') stack.push(object[i]);
        if(object[i] ==='}') {
            if(stack.size === 0) return 'This stack sucks.';
            stack.pop();
        }
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



challenge.binarySearch = function(n, array) {

};


