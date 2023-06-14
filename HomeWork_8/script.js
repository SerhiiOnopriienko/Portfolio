// Task 1
function addZero(num){
    if(num >= 0 && num < 10){
        num = '0' + num;
    }
    return num;
}

function parseDate(){
    const date = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = week[date.getDay()];
    let resultHours = date.getHours();
    resultHours = addZero(parseInt(resultHours));
    if(date.getHours() === 0){
        resultHours = `12 AM`;
    }
    if(date.getHours() > 0 && date.getHours() < 12){
        resultHours = `${resultHours} AM`;
    }
    if(date.getHours() > 12 && date.getHours() < 24 ){
        resultHours = resultHours % 12;
        resultHours = addZero(parseInt(resultHours)) + ' PM';
    }
    if(date.getHours() === 12){
        resultHours += ' PM';
    }
    let resultMinutes = addZero(date.getMinutes());
    let resultSeconds = addZero(date.getSeconds());
    return console.log(`Today is: ${dayOfWeek}. \nCurrent time is: ${resultHours} : ${resultMinutes} : ${resultSeconds}`);
}
parseDate()

// Task 2
let getRandomInteger = function (min, max){
    let rdmNumber = Math.floor(Math.random() * (max - min) + min);
    return rdmNumber;
}
let usersNumber = prompt('Enter a number to compare');
let value = getRandomInteger(0, 10);
console.log(value);
if(usersNumber.length && isFinite(usersNumber) && !(Number(usersNumber) % 1)){
    if(value === Number(usersNumber)){
        console.log('Good work');
    } else {
        console.log('Not matched');
    }
} else {
    console.error('Wrong input')
}

// Task 3
function getDecimalNumber(arr){
    let result = 0;
    for(i = 1; i < arr.length + 1; i++){
        result += Math.pow((arr[i-1] * 2), (arr.length - i)); 
    }
    return result;
}
console.log(getDecimalNumber([0, 0, 0, 1]));

// Task 4
let number = prompt('Enter integer number');
if(number.length && isFinite(number) && !(Number(number) % 1 && number > 0)){
    divideOnTwo(number);
} else {
    console.error('Wrong input');
}
function divideOnTwo(number){
    let iterations = 0;
    let initial = number;
    do{
        iterations++;
        number = number / 2;
    }
    while(number >= 50);
    return console.log(`Initial number is: ${initial}; \nAttempts: ${iterations}; \nFinal number is: ${number};`);
}