'use strict';

const wb = module.exports = {};

wb.compare = function(tree1, tree2){

    if(!tree1 || !tree2) return null;
    if(!!tree1.left !== !!tree2.left || !!tree1.right !== !!tree2.right) return false;

    if(tree1.left !== null && tree2.left !== null) return wb.compare(tree1.left, tree2.left);
    if(tree1.right !== null && tree2.right !== null) return wb.compare(tree1.right, tree2.right);

    return true;
};