'use strict';

const Kary = require('./lib/kary');

let wb = module.exports = {};

//function returns parent with the most children from a K-ary tree
wb.noCondoms = function(groot) {
    if(!groot || !(groot instanceof Kary)) return new Error('Input requires a K-ary Tree');
    if(groot.root.children.length === 0) return new Error('K-ary tree is impotent');

    let nodes = 0;
    let result;
    
    groot.breadthFirst(current => {
        if(current.val.children.length > nodes) {
            nodes = current.val.children.length;
            result = current.val;
        }
    });
        
    return result;
};
