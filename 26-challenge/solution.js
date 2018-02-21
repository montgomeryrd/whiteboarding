'use strict';

const utils = module.exports = {};

utils.map = (array, callback) => {
  
  let newArray = [];

  array.forEach(function(current, index, array) {
    newArray.push(callback(current));
  });
  return newArray;
};

utils.filter = (array, callback) => {
  
  let newArray = [];

  array.forEach(function(current, index, array) {
    if(callback(current, index, array)) {
      newArray.push(current);
    }
  });
  return newArray;
};

utils.reduce = (array, callback, initial) => {

  let accumulator = initial || 0;

  array.forEach(function(current) {
    accumulator = callback(accumulator, array[i]);
  });
  return accumulator;
};