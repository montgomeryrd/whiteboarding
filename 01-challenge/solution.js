'use strict';

function array(nums){
    let high = Math.max(...nums);
    let low = Math.min(...nums);
    let avg = nums.reduce((acc, curr) => acc + curr)/nums.length;

    let obj = {
        high,
        low,
        avg
    }
    return obj;
}