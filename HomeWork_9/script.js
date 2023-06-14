// Task 1
function fillArray(num, value){
    return new Array(num).fill(value);
}
const test = fillArray(3, 'qwerty');
console.log(test);

// Task 2
function reverseArray(arr){
    return arr.reverse();
}
let array = ['My', 'life', '-', 'my', 'rules'];
console.log(reverseArray(array));

// Task 3
function filterArray(arr){
    return arr.filter(element => Boolean(element));
}
const filteredArray = [0, 1, 2, null, undefined, 'qwerty', false, NaN, ""];
console.log(filterArray(filteredArray));

// Task 4
function spliceFour(arr){
    arr.splice(3, 1, 'JavaScript');
    return arr;
}
let arrayToSplice = [1, 2, 3, 4, 5, 6];
console.log(spliceFour(arrayToSplice));

// Task 5
function joinArray(arr, el){
    return arr.join(el);
}
let arrToJoin = [1, 2, 3, 4, 5];
console.log(joinArray(arrToJoin, '@'));

//Task 6
function joinStr(){
    let arg = [...arguments];
    return arg.filter(el => typeof el === 'string').join(',');
}
console.log(joinStr('g','o', 0, '0', null, 'd', {}));

// Task 7
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
function advancedFillArray(num, min, max){
    let array = new Array(num).fill('q');
    return array.map(el => getRandomInt(min, max));;
}
console.log(advancedFillArray(5, 1, 15));

// Task 8
// 8-1
function getExponentWithFor(number, exponent){
    let result = 1;
    for(let i = 0; i < exponent; i++){
        result *= number;
    }
    return result;
}
console.log(getExponentWithFor(3, 6));
// 8-2
function getExponentWithFunc(number, exponent){
    if(exponent === 1){
        return number;
    } else {
        return number * getExponentWithFunc(number, exponent - 1);
    }
}
console.log(getExponentWithFunc(3, 6));