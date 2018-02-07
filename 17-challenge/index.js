'use strict';

const Kary = require('./lib/kary');

let wb = module.exports = {};

wb.sum = function(groot) {
    if(!groot || !(groot instanceof Kary)) return new Error('Input requires a K-ary Tree');

    let total = 0;

    groot.breadthFirst(current => total += current.val.val);

    return total;
};
