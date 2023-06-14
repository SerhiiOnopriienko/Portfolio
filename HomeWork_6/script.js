// Task1
const seconds = prompt('Enter a number from 0 to 59', 59);
if(seconds.length && isFinite(seconds) && !(Number(seconds) % 1) && seconds >= 0 && seconds < 60){
    if(seconds < 15){
        console.log(1);
    } else if(seconds < 30){
        console.log(2);
    } else if(seconds < 45){
        console.log(3);
    } else {
        console.log(4);
    }
} else {
    console.error('Wrong input');
}

// Task 2
const infoNumber = prompt('Enter a number to get information about it', 345);
if(infoNumber.length && isFinite(infoNumber) && !(Number(infoNumber) % 1)){
    if(Number(infoNumber) === 0){
        console.log(infoNumber + ', length: ' + infoNumber.length);
    } else if(infoNumber > 0){
        let sum = 0;
        for(let i = 0; i < infoNumber.length; i++){
            sum = Number(sum) + Number(infoNumber.charAt(i));
        }
        console.log(`positive, length: ${infoNumber.length}, sum: ${sum}`);
    } else{
        console.log(`negative, length: ${infoNumber.length -1}`);
    }
} else {
    console.error('Wrong input');
}

// Task 3
let yourMoney = prompt('Enter amount of money you have', 3301.5);
if(yourMoney.length && isFinite(yourMoney) && yourMoney > 0){
    if(yourMoney < 300){
        console.log(`You can't do anything. I'm sorry :(`)
    } else if(yourMoney >= 300 && yourMoney < 3000){
        console.log('You can buy only AirPods');
    } else if(yourMoney >= 3000 && yourMoney < 3300){
        console.log('You can go on vacation or buy AirPods! What are you waiting for?')
    } else {
        console.log('You have enough money for everything. WOW!');
    }
} else {
    console.error('Wrong input');
}

// Task 4
const number = prompt('Enter a number to operate', 9);
if(number.length && isFinite(number) && !(Number(number) % 1) && number > 0){
    let str = '';
    for(let i = 1; i <= number; i++){
        if(!(i % 2)){
            str += Math.pow(i, 2);
        } else {
            str += i;
        }
        if(i !== Number(number)){
            str += ' ';
        }
    }
    console.log(str);
} else {
    console.error('Wrong input');
}

// Task 5
const multipleNumber = prompt('Enter a number to multiply', 5);
if(multipleNumber > 0 && multipleNumber <=9){
    for(let i = 1; i <= 9; i++){
        console.log(`${i} x ${multipleNumber} = ${i * multipleNumber};`)
    }
} else {
    console.error('Wrong input');
}
// upd
for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = ${i * j};`)
    }
}

// Task 6
 const symb = prompt('Enter a symbol to repeat', '$');
 const numOfRepeats = prompt('Enter a number of repeats', 8);
 let showSymb = '';
 if(symb.length && numOfRepeats.length && isFinite(numOfRepeats) && !(Number(numOfRepeats) % 1 && numOfRepeats > 0)){
    for(let i = 0; i <= numOfRepeats; i++){
        showSymb = symb + showSymb;
        console.log(showSymb);
    }
 } else {
    console.error('Wrong input');
 }

// Task 7
let result = document.getElementById('result');
let value = '';

for(let i = 1000; i <= 2000; i++){
    value += ' &#' + i;
}
result.innerHTML = value;

// upd
let upd = document.querySelector('#upd');
let secondValue = '';
for(let i = 7000; i <= 10000; i++){
    secondValue += ' &#' + i;
}
upd.innerHTML = secondValue;

//Task 8
const revNumber = prompt('Enter a number to reverse', '-3456');
if(revNumber.length && isFinite(revNumber) && !(Number(revNumber) % 1)){
    let show = '';
    if(revNumber > 0){
    for(let i = revNumber.length - 1; i >=0; i--){
        show += revNumber.charAt(i);
    }
    console.log(show);
    } else {
        for(let i = revNumber.length - 1; i >0; i--){
            show += revNumber.charAt(i);
        }
        console.log('-' + show);
    }
} else {
    console.error('Wrong input');
}

// Task 9
const fibo = prompt('Enter a number of fibonacci numbers to display', 9);
let a = 1;
let b = 1;
let c = 0;
for(let i = 0; i < fibo; i++){
    a = b;
    b = c;
    c = a + b;
    console.log(c);
}

// Task 10
const numToEterate = prompt('Enter a number max number', 10);
if(numToEterate.length && isFinite(numToEterate) && !(Number(numToEterate) % 1 && numToEterate > 0)){
    let sum = 0;
    let iterCount = 0;
    for(let i = 1; i < numToEterate; i++){
        if(sum < numToEterate){
        sum = sum + i;
        iterCount++;
        }
} 
    console.log(iterCount);
} else {
    console.error('Wrong input');
}