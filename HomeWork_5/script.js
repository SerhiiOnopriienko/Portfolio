//Task 1
const name = prompt('Enter your name', 'Serhii');
let string = 'Happy birthday to you';
for(let i = 0; i < 3; i++){
    console.log(string);
    if(i === 1){
        console.log('Happy birthday, dear ' + name);
    }
}


//Task 2
const input = Number(prompt('Enter number of repeats', 4));
let str = '';
for(let i = 0; i < input; i++){
    str = str + '.#';    
}
console.log(str);

//Task 3
let usersInput = Number(prompt('Enter a number to operate with', 9));
let addedNumber = 0;
while (usersInput <= 0 || !isFinite(usersInput)){
    usersInput = Number(prompt('Invalid. You should enter a number'));
}
for(let i = usersInput; i > 0; i--){
    if(i % 2 !== 0){
        addedNumber = i + addedNumber;
    }
}
console.log(addedNumber);

//Task 4
let iterationsCount = 0;
while(true){
    let rdm = Math.random();
    iterationsCount++;
    if(rdm > 0.7){
        console.log(`Loop was finished because of: ${rdm} \nNumber of attempts: ${iterationsCount}`);
        break;
    }
}

//Task 5
let result = 0;
while(result < 50){
    result++;
    if(result % 3 && result % 5 === 0){
        console.log('FizzBuss');
        continue;
    } else if(result % 3 === 0){
        console.log('Fizz');
        continue;
    } else if(result % 5 === 0){
        console.log('Buzz');
        continue;
    }
    console.log(result);
}

//Task 6
let startDate = 2015;
let endDate = 2050;
let resultDate = '';
for(let i = startDate; i <= endDate; i++){
    let year = new Date(i, 0, 1);
    if(year.getDay() === 0){
        resultDate = i;
        console.log(`"1st of January" is being a Sunday in ${resultDate}`);
    } 
}
