"use strict"

/**
 * 
 * @param {Array} arr 
 */
function getSumOfFirstAndLast(arr) {
    const first = +arr[0];
    const last = +arr[arr.length - 1];

    return first + last;
}

// console.log(getSumOfFirstAndLast(['20', '30', '40'])); 
// console.log(getSumOfFirstAndLast(['5', '10']));


/**
 * 
 * @param {Array} arr 
 */
function getEvenPostionedElements(arr) {
    return arr
            .filter((_, index) => index % 2 === 0)
            .join(' ');
}

// console.log(getEvenPostionedElements(['20', '30', '40']));
// console.log(getEvenPostionedElements(['5', '10']));

/**
 * 
 * @param {Array} arr 
 */
function negativeSlashPositiveNumbers(arr) {
    const res = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            res.unshift(arr[i]);
        } else { 
            res.push(arr[i]);
        }
    }
    
    res.forEach(el => console.log(el));
}

// negativeSlashPositiveNumbers([7, -2, 8, 9]);
// negativeSlashPositiveNumbers([3, -2, 0, -1]);

/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 */
function lastKElementsSequence(n, k) {
    const res = [1];

    for (let i = 1; i < n; i++) {
        const count = k > i ? i : k;
        let sum = 0;

        for (let j = i - count; j < i; j++) {
            sum += res[j];    
        }

        res.push(sum);
    }

    console.log(res.join(' '));
}

// lastKElementsSequence(6, 3);
// lastKElementsSequence(8, 2);

/**
 * 
 * @param {Array} arr 
 */
function processOddNumbers(arr) {
    return arr
        .filter((_, index) => index % 2 !== 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');
}

// console.log(processOddNumbers([10, 15, 20, 25]));
// console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));

/**
 * 
 * @param {Array} arr 
 */
function getSmallestTwoNumbers(arr) {
    return arr
            .sort((a, b) => a - b)
            .slice(0, 2)
            .join(' ');
}

// console.log(getSmallestTwoNumbers([30, 15, 50, 5]));
// console.log(getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]));

/**
 * 
 * @param {Array} matrix 
 */
function getBiggestNumberFromMatrix(matrix) {
    return (matrix
                .flat()
                .sort((a, b) => b - a))[0];
}

// console.log(getBiggestNumberFromMatrix([[20, 50, 10], [8, 3, 145]]));

/**
 * 
 * @param {Array} matrix 
 */
function getDiagonalSum(matrix) {
    let mainDiagonalIndex = 0, secondaryDiagonalIndex = matrix.length - 1;
    let mainDiagonalSum = 0, secondaryDiagonalSum = 0;

    matrix.forEach(row => {
        mainDiagonalSum += row[mainDiagonalIndex];
        secondaryDiagonalSum += row[secondaryDiagonalIndex];

        mainDiagonalIndex++;
        secondaryDiagonalIndex--;
    })

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

// getDiagonalSum([[20, 40], [10, 60]]);
// getDiagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);

/**
 * 
 * @param {Array} matrix 
 */
function getCountOfEqualNeighbours(matrix) {
    return matrix.reduce((rowAcc, currRow, rowIndex) => {
        const currentCount = currRow.reduce((colAcc, currCol, colIndex) => {
            if (currCol === currRow[colIndex + 1]) colAcc++;
            if (currCol === (matrix[rowIndex + 1] || [])[colIndex]) colAcc++;
            
            return colAcc;
        }, 0);

        return rowAcc + currentCount;
    }, 0);
}

console.log(getCountOfEqualNeighbours(
    [['2', '3', '4', '7', '0'],
     ['4', '0', '5', '3', '4'],
     ['2', '3', '5', '4', '2'], 
     ['9', '8', '7', '5', '4']]));