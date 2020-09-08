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

console.log(getSumOfNumbersNtoM('1', '5'));
console.log(getSumOfNumbersNtoM('-8', '20'));