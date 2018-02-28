'use strict';

const wb = module.exports ={};

wb.doathing = function(n, nth){

    if(!n || !nth || typeof n !== 'number' || typeof nth !== 'number') return new Error('Invalid Input');

    let x = n;
    let expo = nth -1; 

    while(expo > 0){
        x = x * n;
        expo--;
    }
    let y = 0;
    let z =x.toString().match(/\d{1,1}/g);

    for(let i = 0 ; i < z.length ; i++){
        y = y + Number(z[i]);
    }
    return `Answer: ${n}^${nth}th = ${x}, Sum: ${y}`;
};