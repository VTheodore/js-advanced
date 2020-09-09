"use strict"

/**
 * 
 * @param {String} fruit 
 * @param {Number} weightInGrams 
 * @param {Number} pricePerKilo 
 */
function calculateMoney(fruit, weightInGrams, pricePerKilo) { 
    const weightInKilos = weightInGrams / 1000;
    const money = weightInKilos * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}

// calculateMoney('orange', 2500, 1.80);
// calculateMoney('apple', 1563, 2.35);

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 */
function getGCD(a, b) {
    if (b === 0) return a;

    return getGCD(b, a % b);
}

// console.log(getGCD(15, 5));
// console.log(getGCD(2154, 458));

/**
 * 
 * @param {Number} num 
 */
function sameDigits(num) {
    let sum = 0;
    let hasSameDigits = true;
    const lastDigit = num % 10;

    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = ~~(num / 10); // integer division

        if (digit !== lastDigit) hasSameDigits = false;
    }

    console.log(hasSameDigits);
    console.log(sum);
}

// sameDigits(2222222);
// sameDigits(1234);

/**
 * 
 * @param {Number} numberOfSteps 
 * @param {Number} footprintLengthInMetres 
 * @param {Number} speedInKilometres 
 */
function printTimeToWalk(numberOfSteps, footprintLengthInMetres, speedInKilometres) {
    const distanceInMetres = numberOfSteps * footprintLengthInMetres;
    const additionalBreaksInSeconds = ~~(distanceInMetres / 500) * 60;
    const speedInMetresPerSeconds = (speedInKilometres * 1000) / 3600;
    let timeInSeconds = distanceInMetres / speedInMetresPerSeconds + additionalBreaksInSeconds;

    const hours = ~~(timeInSeconds / 3600);
    timeInSeconds %= 3600;
    const minutes = ~~(timeInSeconds / 60);
    timeInSeconds %= 60;

    console.log(`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${timeInSeconds.toFixed()}`);
}

// printTimeToWalk(4000, 0.60, 5);
// printTimeToWalk(2564, 0.70, 5.5);

/**
 * 
 * @param {Array} input 
 */
function roadRadar(args) {
    const [motorwayLimit, interstateLimit, cityLimit, residentialLimit] = [130, 90, 50, 20];
    const speed = args[0];
    const area = args[1];

    let speedAboveTheLimit = 0;

    switch (area) {
        case 'motorway': 
            speedAboveTheLimit = speed - motorwayLimit;
            break;
        case 'interstate':
            speedAboveTheLimit = speed - interstateLimit;
            break;
        case 'city':
            speedAboveTheLimit = speed - cityLimit;
            break;
        case 'residential':
            speedAboveTheLimit = speed - residentialLimit;
            break;
    }

    let speedingMessage = '';
    if (speedAboveTheLimit > 0 && speedAboveTheLimit <= 20) {
        speedingMessage = 'speeding';
    } else if (speedAboveTheLimit > 20 && speedAboveTheLimit <= 40) {
        speedingMessage = 'excessive speeding';
    } else if (speedAboveTheLimit > 40) {
        speedingMessage = 'reckless driving';
    }

    console.log(speedingMessage);
}

// roadRadar([40, 'city']);
// roadRadar([21, 'residential']);
// roadRadar([120, 'interstate']);
// roadRadar([200, 'motorway']);

/**
 * 
 * @param {Array} args 
 */
function cookingByNumbers(args) {
    let number = +args.shift();
    args.forEach(op => {
        switch (op) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= (number * 0.2);
                break;
        }

        console.log(number);
    })
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);