//Task 1
let first = 10;
let second = first * 3;
let third = first + second;
console.log(`Перша змінна: ${first}, 
Друга змінна: ${second}, 
Третя змінна: ${third}.`);

//Task 2
const a = +prompt('Enter first number', 2);
const b = +prompt('Enter second number', 3);
console.log(`${a} + ${b} = ${a + b}
${a} - ${b} = ${a - b}
${a} * ${b} = ${a * b}
${a} / ${b} = ${a / b}`);

//Task 3
let str = prompt('Enter a string to mutate', 'Hello, it`s a test');
console.log(`You wrote: "${str}" \\ it\`s length ${str.length}. \nThis is your big string: "${str.toUpperCase()}". \n\tAnd this is a small one: "${str.toLocaleLowerCase()}"`);

//Task 4
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const needdedPaper = consumptionPerWeek * weeksAmount / sheetsInReamPaper;
console.log(`На 8 тижнів необхідно закупити мінімум ${parseInt(needdedPaper)} пачок паперу.`);

//Task 5
const sum = prompt('Write your credit sum.', 25000);
const percentage = prompt('Write your percentage rate.', '10.5%');
console.log(`Your monthly payment is ${parseFloat(sum) / 100 * parseFloat(percentage)}.`);