// Task 1
let busNumber = Number(prompt('Enter a bus number.', 7));
if(busNumber === 7 || busNumber === 255 || busNumber === 115){
    console.log('You can go');
} else {
    console.log('Wait');
}

// Task 2
let someNumber = Number(prompt('Enter any number', 12));
let greater = someNumber > Math.PI;
let less = someNumber < Math.PI;
let equal = someNumber === Math.PI;
if(isNaN(someNumber)){
    console.log('Wrong input');
} else {
    console.log(`You entered: ${someNumber}
    Is greater then PI: ${greater}
    Is less then PI: ${less}
    Is equal PI: ${equal}`);
};

// Task 3
let pass = prompt('Enter a safe password', 'hjfuKu6');
if (pass.length > 5 && pass !== '123456' && pass !== 'qwerty' && pass.toLowerCase() !== pass){
    console.log('Strong');
} else if (pass.length === 5 && pass.toLowerCase() !== pass){
    console.log('Middle');
} else{
    console.log('Weak');
}