//Exercise 7
let factorialNumber = prompt("Give a number:");
let result = factorialNumber;
for(var i=1;i < factorialNumber;i++){
  result = i * result;
}
console.log(result);

//Exercise 8
const leapYear = prompt("Give a year:");

if (leapYear % 4 === 0) {
    console.log(leapYear + " is a leap year!");
} else {
    console.log(leapYear + " is not a leap year!");
}

//Exercise 9
let sum = 0;
let n = 1;
while (n <= 100) {
    sum = n + sum;
    n++;
}

console.log(sum);


//Exercise 10
const firstNumber = prompt("Give the first number:");
const secondNumber = prompt("Give the second number:");

console.group('Operations')
console.log(+firstNumber + +secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.groupEnd();

//Exercise 11
let string = 'This is a string';
console.log(string);

let number = 6;
console.log(number);

let boolean = true;
console.log(boolean);

let nullVar = null;
console.log(nullVar);

let nothing;
console.log(nothing);

let object = {name:"Tary", age: "< 1 year", species: "code"};
console.log(object);

let array = ['Tary', 'Jim', 'Steven', 'Felix'];
console.log(array);

//Exercise 12