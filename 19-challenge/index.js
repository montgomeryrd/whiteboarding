'use strict';

const Kary = require('./lib/kary');
const SLL = require('./lib/sll');
let wb = module.exports = {};

//function returns parent with the most children from a K-ary tree
wb.flatEarth = function(groot) {
    if(!groot || !(groot instanceof Kary)) return new Error('Input requires a K-ary Tree');
    // if(groot.root.children.length === 0) return new Error('K-ary tree is impotent');
    
    let linked = new SLL();

    groot.breadthFirst(current => {
        if(current.val.children) linked.insertEnd(current.val.val);
    });
        
    return linked;
};


