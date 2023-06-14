// Task 1
let coffeeMachine = {
    message: 'Your coffee is ready!',
    start () {
        setTimeout(() => {
            console.log(this.message);
        }, 3000);
    },
 }
coffeeMachine.start();

let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
 }
coffeeMachine.start = coffeeMachine.start.bind(teaPlease);
coffeeMachine.start();

// Task 2
function concatStr(firstWord, symb, lastWord){
    return `${firstWord}${symb}${lastWord}`;
}
let checkConcat = concatStr('Hello', ' ', 'Matt');
console.log(checkConcat);
let hello = concatStr.bind(null, 'Hello', ' ');
let finalResult = hello('John');
console.log(finalResult);

// Task 3
function showNumbers(start, end, interval){
    const int = setInterval(function(){
        console.log(start);
        if(start === end){
            clearInterval(int);
        }
        start++;
    }, interval);
}
showNumbers(5, 10, 500);

// Task 4
// function addBase(base) {
//     return function (num) {
//       return base + num;
//     };
//   }
//   let addOne = addBase(1);
//   console.log(addOne(5) + addOne(3));

/* 
Дана функція поверне 10.
Створивши змінну addOne, яка дорівню addBase(1) ми створили замикання та зафіксували значення аргументу функції base як 1, а передавши в функцію addOne аргументи 5 та три ми присвоїли значення num як 5 та 3 відповідно. А оскільки функція колбек  функції addBase повертає суму base та num, то при виклику addOne(5) ми отримаємо 6, а при виклику addOne(3) ми отримаємо 4. Результатом додавання 6 та 4 буде 10.
*/