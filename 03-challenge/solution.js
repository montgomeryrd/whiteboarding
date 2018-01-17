'use strict';


let traverse = (car) => {
    let passengers = 0;

    while (car.next !== null) {
        console.log('passengers: ', car.passengers);
        passengers += car.passengers;
        car = car.next;
    }
    return passengers + car.passengers;
  };

const car4 = {passengers: 0, next: null};
const car3 = {passengers: 2, next: car4};
const car2 = {passengers: 6, next: car3};
const car1 = { passengers: 2, next: car2};  
const engine = { passengers: 2, next: car1};

traverse(engine);