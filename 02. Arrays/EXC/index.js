"use strict"

/**
 * 
 * @param {Array} args 
 */
function printArrayWithGivenDelimiter(args) {
    const delimiter = args.pop();
    console.log(args.join(delimiter));
}

// printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
// printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);

/**
 * 
 * @param {Array} args 
 */
function printEvertNthElement(args) {
    const step = +args.pop();

    for (let i = 0; i < args.length; i += step) {
        console.log(args[i]);
    }
}

// printEvertNthElement(['5',
// '20',
// '31',
// '4',
// '20',
// '2']);

/**
 * 
 * @param {Array} args 
 */
function addAndRemoveElements(args) {
    let counter = 0;

    const arr = [];
    for (let command of args) {
        counter++;
        switch (command) {
            case 'add':
                arr.push(counter);
                break;
            case 'remove':
                arr.pop();
                break;
        }
    }

    arr.length == 0 ? console.log('Empty') : arr.forEach(el => console.log(el));
}

// addAndRemoveElements(['add',
// 'add',
// 'add',
// 'add']);

// addAndRemoveElements(['add',
// 'add',
// 'remove',
// 'add',
// 'add']);

// addAndRemoveElements(['remove',
// 'remove',
// 'remove']);

/**
 * 
 * @param {Array} args 
 */
function rotateArray(args) {
    const rotations = +args.pop();
    const minimizedRotations = rotations % args.length;

    for(let i = 0; i < minimizedRotations; i++) {
        args.unshift(args.pop());
    }
    
    console.log(args.join(' '));
}

// rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

/**
 * 
 * @param {Array} arr 
 */
function extractIncreasingSubsequenceFromArray(arr) {
    arr.reduce((acc, curr) => {
        if (acc.length === 0) {
            acc.push(curr);
            return acc;
        }

        if (acc[acc.length - 1] <= curr) acc.push(curr);

        return acc;
    }, [])
    .forEach(e => console.log(e));
}

// extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
// extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);

/**
 * 
 * @param {Array} arr 
 */
function sortArrayByTwoCriteria(arr) {
    function sortCriteria(a, b) {
        if (a.length < b.length) return -1;
        else if (a.length > b.length) return 1;

        if (a.toUpperCase() < b.toUpperCase()) return -1;
        else if (a.toUpperCase() > b.toUpperCase()) return 1;
        else return 0;
    }

    arr.sort(sortCriteria).forEach(e => console.log(e));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);