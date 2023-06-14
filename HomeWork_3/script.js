// Task 1
let firsWord = prompt('Enter first word or phrase', 'JavaScript');
let secondWord = prompt('Enter second word or phrase', 'is my favorite');
let thirdWord = prompt('Enter third word or phrase', 'language');
console.log(firsWord + secondWord + thirdWord);

// Task 2
let hours = +prompt('Enter the number of hours you want to convert to seconds', 5);
alert((hours * 60 * 60).toFixed(1));

// Task 3
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = prompt('Enter your flat number');
const houseNumber = Math.ceil(roomNumber / (roomsOnFloor * floors));
const yourFloor = Math.ceil((roomNumber - roomsOnFloor * floors * (houseNumber -1)) / houseNumber);
console.log(`Your house number is ${houseNumber} and your floor is ${yourFloor}`);

// Task 4
const celsium = parseFloat(prompt('Enter degreese in celsium'));
const farenheit = (celsium * 1.8 + 32).toFixed(1);
console.log(`${celsium}\u2103 is ${farenheit}\u2109`);