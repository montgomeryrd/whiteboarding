'use strict';

const Kary = require('./lib/kary');

let wb = module.exports = {};

wb.folks = function(groot) {
    if(!groot || !(groot instanceof Kary)) return new Error('Input requires a ROOT');

    let array = [];

    groot.breadthFirst(current => {
        if(!current.val.children[0]) array.push(current.val.val);
    });

    return array;
};