'use strict'

module.exports = function (a, b){
    let array = [];

    for(let i = 0 ; i < a.length ; i++){
        if(b.includes(a[i])){
            array.push(a[i])
        }
    }
    
    if(a.length < 1 || b.length < 1 || array.length < 1){
        return null
    } else {
        return array
    }
}