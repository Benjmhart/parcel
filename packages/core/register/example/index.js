require('@parcel/register');

const count = require('./count.js');
const number = require('./number.js');

const numberOne = number();
const numberTwo = number();

console.log(`${numberOne} + ${numberTwo} =`, count(numberOne, numberTwo));