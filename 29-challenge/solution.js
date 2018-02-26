'use strict';

const wb = module.exports = {};

wb.anagrams = function(array) {

    if(!array || !(Array.isArray(array))) return new Error('Invalid Input');
    let words = [];

    for(let a = 0 ; a < array.length ; a++){
        words.push(array[a].split(''));
    }

    let newArray = [];

    for(let b = 0 ; b < words.length ; b++){
        let temp = [];
        for(let c = 0 ; c < words[b].length ; c++){
            temp.push(words[b][c].charCodeAt(0) - 97);
        }
        newArray.push(temp);
    }

    newArray.sort(function(a, b){
        return b - a;
    });

    for(let d = 0 ; d < newArray.length ; d++){
        newArray[d].sort();
    }

    newArray;

    let answer = [];
    let temporary = [];
    let realAnswer = [];
    let reallyTemporary = [];

    while(newArray.length !== 0) {
        answer.push(newArray[0]);
        realAnswer.push(array[0]);
        temporary = [];
        reallyTemporary = [];

        for(let e = 1 ; e < newArray.length ; e++){
            if(newArray[0].toString() === newArray[e].toString()) {
                answer.push(newArray[e]);
                realAnswer.push(array[e]);
            } else {
                temporary.push(newArray[e]);
                reallyTemporary.push(array[e]);
            }
        }
        newArray = temporary;
        array = reallyTemporary;
    }
    return realAnswer;
};