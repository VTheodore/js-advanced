"use strict"

/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @param {Stirng} str3 
 */
function printStrLengthAndAvgLength(str1, str2, str3) {
    const sumLength = str1.length + str2.length + str3.length;
    const avgLength = sumLength / 3;

    console.log(sumLength);
    console.log(Math.floor(avgLength));
}

// printStrLengthAndAvgLength('chocolate', 'ice cream', 'cake');
// printStrLengthAndAvgLength('pasta', '5', '22.3');

/**
 * 
 * @param {Number} operand1 
 * @param {Number} operand2 
 * @param {String} operation 
 */
function mathOperations(operand1, operand2, operation) {
    switch(operation) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand1 / operand2;
        case '%': return operand1 % operand2;
        case '**': return operand1 ** operand2;
    }
}

// console.log(mathOperations(2, 3, '+'));
// console.log(mathOperations(3, 5.5, '*'));

/**
 * 
 * @param {String} n 
 * @param {String} m 
 */
function getSumOfNumbersNtoM(n, m) {
    let start = +n;
    let end = +m;
    let sum = 0;
    
    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// console.log(getSumOfNumbersNtoM('1', '5'));
// console.log(getSumOfNumbersNtoM('-8', '20'));

/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Number} num3 
 */
function largestNumber(num1, num2, num3) {
    console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);
}

// largestNumber(5, -3, 16);
// largestNumber(-3, -5, -33.5);

function circleArea(input) {
    const type = typeof input;

    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        const area = Math.PI * input ** 2;
        console.log(area.toFixed(2));
    }
}

// circleArea('sfdf');
// circleArea(5);

/**
 * 
 * @param {Number} count 
 */
function printSquareOfStars(count = 5) {
    for (let i = 0; i < count; i++) {
        console.log("* ".repeat(count));
    }
}

// printSquareOfStars(3);

/**
 * 
 * @param {String} input 
 */
function dayOfWeek(input) {
    const daysAndValues = {
        'monday':1,
        'tuesday': 2,
        'wednesday': 3,
        'thursday': 4,
        'friday': 5,
        'saturday': 6,
        'sunday': 7
    }

    const value = daysAndValues[input.toLowerCase()];
    
    console.log(value === undefined ? 'error' : value);
}

// dayOfWeek('Monday');
// dayOfWeek('Friday');
// dayOfWeek('Shestuk');

/**
 * 
 * @param {Array} input 
 */
function aggregateElements(input) {
    let sum = 0, inverseSum = 0, concat = '';

    for(let i = 0; i < input.length; i++) {
        sum += +input[i];
        inverseSum += 1/input[i];
        concat += input[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);

/**
 * 
 * @param {String} input 
 */
function wordsUppercase(input) {
    const res = input.split(/[^a-zA-Z]+/).map(w => w.toUpperCase()).join(', ');
    console.log(res);
}

// wordsUppercase('Hi, how are you?');
// wordsUppercase('Hello');