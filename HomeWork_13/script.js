// Task 1
let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() { 
        this.aSide = 3;
        this.bSide = 3;
        this.cSide = 3;
    },
    getPerimeter: function() { 
        return this.aSide + this.bSide + this.cSide;
    },
    isEqualSides: function() { 
        return this.aSide === this.bSide && this.bSide === this.cSide;
    },
 }
 triangle.setValues();
 console.log(triangle.getPerimeter());
 console.log(triangle.isEqualSides());

 // Task 2
 let calculator = {
    firstNum: 0,
    secondNum: 0,
    read: function() {
        this.firstNum = +prompt('Enter first number', 5);
        this.secondNum = +prompt('Enter second number', 2);
    },
    sum: function() {
        return this.firstNum + this.secondNum;
    },
    multi: function() {
        return this.firstNum * this.secondNum;
    },
    diff: function() {
        return this.firstNum - this.secondNum;
    },
    div: function() {
        return this.firstNum / this.secondNum;
    },
 }
calculator.read();
console.log(calculator.sum());
console.log(calculator.diff());
console.log(calculator.multi());
console.log(calculator.div());

// Task 3
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
 };

function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, '', '');
format.apply(country, ['[', ']']);
format.call(country.capital, '', '');
format.apply(country.capital, ['', '']);
format.apply(country.language, ['', '']);

// Task 4
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();
/* Виконуючись, функція одразу ініціалізує змінну text зі значенням undefined, оскільки вона оголошена за допомогою ключового слова var. 
Зовнішню змінну text функція не візьме до уваги, тому що спочатку вона шукає в локальному скоупі, а вже потім в глобальному. 
Тому даний код поверне undefined.*/