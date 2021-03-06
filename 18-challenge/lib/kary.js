'use strict';

const Queue = require('./queue');

const TreeNode = class {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
};

const Kary = module.exports = class {
    constructor() {
        this.root = null;
    }

    breadthFirst(callback) {
        let current = null;
        let queue = new Queue();
        queue.enqueue(this.root);


        while(queue.back) {
            current = queue.dequeue();

            // console.log('current:', current);
            callback(current);

            current.val.children.map(c => queue.enqueue(c));
        }
    }

    insert(val, parent) {
        let tn = new TreeNode(val);

        if(!this.root) {
            this.root = tn;
            return this;
        }

        this.breadthFirst(node => {
            if(parent === node.val.val) {
                node.val.children.push(tn);
                return;
            }
        });

        return this;
    }

    removeByVal(val) {
        if(this.root.val === val) {
            this.root = null;
            return;
        }

        this.breadthFirst(node => {
            node.children.map((curr, index) => {
                if(curr.val === val) {
                    node.children.splice(index, 1);
                }
            });
            return;
        });
    }
};