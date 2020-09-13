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
            
// sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);

/**
 * 
 * @param {Array} matrix 
 */
function isMagicalMatrix(matrix) {
    const firstRowSum = matrix[0].reduce((acc, curr) => acc + curr);

    for (let row = 1; row < matrix.length; row++) {
        const rowSum = matrix[row].reduce((acc, curr) => acc + curr);
        
        if (firstRowSum !== rowSum) return false;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== firstRowSum) return false;
    }

    return true;
}

// console.log(isMagicalMatrix(
//     [[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]));
// console.log(isMagicalMatrix(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]));
// console.log(isMagicalMatrix(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
// ));

/**
 * 
 * @param {Array} moves 
 */
function ticTacToe(moves) {
    const dashboardSize = 3;
    const dashboard = fillDashboard(dashboardSize);
    let freeCells = 9;

    for (let i = 0; i < moves.length; i++) {
        const coordinates = moves[i].split(/\s+/);
        const row = +coordinates[0];
        const col = +coordinates[1];
        
        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        const player = freeCells % 2 === 0 ? 'O' : 'X';
        dashboard[row][col] = player;
        freeCells--;

        if (isAWinnersMove()) {
            console.log(`Player ${player} wins!`);
            printDashboard();
            return;
        } else if (freeCells === 0) break;
    }

    console.log('The game ended! Nobody wins :(');
    printDashboard();

    function fillDashboard(dashboardSize) {
        const dashboard = [];

        for (let i = 0; i < dashboardSize; i++) {
            dashboard.push((new Array(3).fill(false)));
        }

        return dashboard;
    }

    function isAWinnersMove() {
        let winOnMainDiagonal = true, winOnSecondaryDiagonal = true;
        let secondaryDiagonalCounter = 1;

        for (let i = 1; i <dashboardSize ; i++) {
            if (dashboard[i - 1][i - 1] !== dashboard[i][i] || dashboard[i][i] === false) winOnMainDiagonal = false;
            if (dashboard[i - 1][secondaryDiagonalCounter - 1] !== dashboard[i][secondaryDiagonalCounter] || dashboard[i][secondaryDiagonalCounter] === false) winOnSecondaryDiagonal = false;
        }

        if (winOnMainDiagonal || winOnSecondaryDiagonal) return true;

        for (let row = 0; row < dashboard.length; row++) {
            const player = dashboard[row][0];
            let isWinning = true;

            for (let col = 1; col < dashboard[row].length; col++) {
                if (dashboard[row][col] !== player) isWinning = false;    
            }

            if (isWinning && player !== false) return true;
        }

        return false;
    }

    function printDashboard() {
        const dashboardRes = dashboard.reduce((rowAcc, currRow) => {
            const rowRes = currRow.reduce((colAcc, currCol) => {
                return colAcc + currCol + '\t';
            }, '');

            return rowAcc + rowRes.trim() + '\n';
        }, '');

        console.log(dashboardRes.trim());
    }
}

// ticTacToe(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );

// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// );

// ticTacToe(["0 1",
//  "0 0",
//  "0 2",
//  "2 0",
//  "1 0",
//  "1 2",
//  "1 1",
//  "2 1",
//  "2 2",
//  "0 0"]);


/**
 * 
 * @param {Array} matrix 
 */
function diagonalAttack(arr) {
    let matrix = [];

    arr.forEach((row, index) => {
        matrix[index] = row
            .split(/\s+/)
            .filter(x => x !== '')
            .map(Number);
    });

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[matrix.length - 1 - i][i];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        matrix.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (rowIndex + colIndex !== matrix.length - 1 && rowIndex !== colIndex){
                    matrix[rowIndex][colIndex] = mainDiagonalSum;
                }
            })
        })
    }


    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

/**
 * 
 * @param {Array} inputArgs 
 */
function printOrbit(inputArgs){
    let matrix = [];
    const rows = +inputArgs[0];
    const cols = +inputArgs[1];
    const point = {
        x: +inputArgs[2],
        y: +inputArgs[3]
    };

    for (let row = 0; row < rows; row++){
        matrix[row] = [];
        for (let col = 0; col < cols; col++){
            matrix[row][col] = Math.max(Math.abs(point.x - row), Math.abs(point.y - col)) + 1;
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    })
}

/**
 * 
 * @param {Number} rows 
 * @param {Number} cols 
 */
function printSpiralMatrix(rows, cols){
    let matrix = [];

    for (let i = 0; i < rows; i++){
        matrix[i] = [];
    }

    let value = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;

    while(value <= rows * cols){
        for (let i = startCol; i <= endCol; i++){
            matrix[startRow][i] = value;
            value++;
        }

        for(let i = startRow + 1; i <= endRow; i++){
            matrix[i][endCol] = value;
            value++;
        }

        for (let i = endCol - 1; i >= startCol; i--){
            matrix[endRow][i] = value;
            value++;
        }

        for (let i = endRow - 1; i > startRow; i--){
            matrix[i][startCol] = value;
            value++;
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    for (let row of matrix){
        console.log(row.join(' '));
    }
}