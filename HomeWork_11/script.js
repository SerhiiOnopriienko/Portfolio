// Task 1
let string1 = "Aquamarine Black Blue Brown Chocolate ";
let string2 = "Green Lime Olive Orange Purple ";
let string3 = "Red Tomato Violet White Yellow";

// a
function joinColor() {
    return [...arguments].join(' ');
}
console.log(joinColor(string1, string2, string3));

// b
function indexColor(string, color) {
    return string.indexOf(color);
}
let indexOfBrown = indexColor(string1, 'Brown');
console.log(indexOfBrown);

// c
function isColorIncludes(string, color) {
    return string.toLowerCase().includes(color.toLowerCase());
}
let includes = isColorIncludes(string1, 'BlAck');
console.log(includes);

// d
function replaceColor(string, valueTochange, changeableValue) {
    return string.replace(valueTochange, changeableValue);
}
let result = replaceColor(string2, 'Olive', 'Grey');
console.log(result);

// e
function splitColors(colors, numbers) {
    return colors.split(' ').filter(el => el.length >= numbers).join(' ');
}
let filteredColors = splitColors(string2, 6);
console.log(filteredColors);

// f
function calculateSpaces(string){
    return string.split(' ').length - 1;
}
let count = calculateSpaces(string3);
console.log(count);