// Task 1
const vegetable = {
    name: 'onion',
    color: 'white',
    shape: 'round',
}
const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

// Task 2
const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);


// Task 3
const vegetables = [
    {
        name: 'cucumber',
        color: 'green',
    },
    {
        name: 'tomatoe',
        color: 'red',
    }
]
const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

// Task 4
let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
  ];
const [, secondStudent, ...otherStudents] = students;
console.log(secondStudent);
console.log(otherStudents.length);
