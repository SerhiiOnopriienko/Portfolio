// Task 1
const arr = ['455', 87.15, true, undefined, null, 'false', [], {}];
for(let i = 0; i < arr.length; i++){
    console.log(`type of element ${arr[i]}: ${typeof arr[i]}, element + 7 = ${arr[i] + 7}`);
}

// Task 2
const arrLength = prompt('Enter a length of array', 10);
let someArray = [];
if(arrLength.length && isFinite(arrLength) && !(Number(arrLength) % 1 && arrLength > 0)){
    for(let i = 0; i < arrLength; i++){
        someArray[i] = Math.floor(Math.random() * 10);
    }
    console.log(someArray);
} else {
    console.error('Wromg input');
}
let copiedArray = [...someArray];
for(let i = 1; i < copiedArray.length; i++){
    if(!(i % 3)){
        copiedArray[i-1] = copiedArray[i-1] * 3;
    }
}
console.log(copiedArray);

// Task 3
// a
const fullNames = [];
for(let i = 0; i < employee.length; i++){
    fullNames[i] = employee[i].name + ' ' + employee[i].surname;
}
console.log(fullNames);

// b
let average = 0;
for(let i = 0; i < employee.length; i++){
    average += employee[i].salary;
}
console.log(`Avarage salary is ${average / employee.length}`);

// c
let maxPrivilegesMan = [];
let max = 0;
for(let i = 0; i < employee.length; i++){
    if(employee[i].isPrivileges && employee[i].gender === 'male' && employee[i].salary > max){
        max = employee[i].salary;
        maxPrivilegesMan = employee[i].name + ' ' + employee[i].surname;
    }
}
console.log(maxPrivilegesMan);

// d
let lessExperience = [];
let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < employee.length; i++){
    if(employee[i].gender === 'female' && employee[i].workExperience < min){
        min = employee[i].workExperience;
        lessExperience = employee[i].name + ' ' + employee[i].surname;
    }
}
min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < employee.length; i++){
    if((employee[i].name + ' ' + employee[i].surname) !== lessExperience && employee[i].gender === 'female' && employee[i].workExperience < min){
        min = employee[i].workExperience;
        lessExperience += ', ' + employee[i].name + ' ' + employee[i].surname;
    }
}
console.log(lessExperience);

// e
let result = [];
for(let i = 0; i < employee.length; i++){
    result += employee[i].name + ' ' + employee[i].surname + ' - ' + employee[i].workExperience * employee[i].salary;
    if(i < employee.length - 1){
        result += '\n';
    }
}
console.log(result);