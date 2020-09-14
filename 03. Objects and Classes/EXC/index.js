"use strict"

/**
 * 
 * @param {Array} input 
 */
function heroicInventory(input) {
    const heroes = [];

    for (const line of input) {
        let [heroName, heroLevel, heroItems] = line.split('/').filter(arg => arg !== '').map(arg => arg.trim());
        heroLevel = Number(heroLevel);

        heroItems = heroItems ? heroItems.split(', ') : [];
        
        const hero = {name: heroName, level: heroLevel, items: heroItems};
        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

// const res1 = heroicInventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'] 
// );
// const res2 = heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);

// console.log(res1);
// console.log(res2);

/**
 * 
 * @param {Array} input 
 */
function convertJSONToHTML(input) {
    return input.reduce((acc, curr) => {
        curr = JSON.parse(curr);

        let trElement = '\t<tr>\n';

        for (const property in curr) {
            trElement += '\t\t<td>';
            trElement += curr[property].toString().replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#039;");
            trElement += '</td>\n'
        }
        trElement += '\t</tr>\n';

        return acc + trElement;
    }, '<table>\n')
    .concat('</table>');
}

// let resHTML = convertJSONToHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}',
// '{"name":"Teo","position":"Lecturer","salary":1000}',
// '{"name":"Georgi","position":"Lecturer","salary":1000}'] 
// );

// console.log(resHTML);

/**
 * 
 * @param {Array} input 
 */
function printJuicesBottles(input) {
    const quantityPerBottle = 1000;
    const juices = {};
    const bottles = {};

    for (const line of input) {
        let [name, quantity] = line.split('=>').filter(w => w !== '').map(w => w.trim());
        quantity = Number(quantity);

        if (juices[name] === undefined) {
            juices[name] = quantity;
        } else {
            juices[name] += quantity;
        }
        
        if (juices[name] >= quantityPerBottle) {
            const numberOfBottles = ~~(quantity / quantityPerBottle);

            if (bottles[name] === undefined) {
                bottles[name] = numberOfBottles;
            } else {
                bottles[name] += numberOfBottles;
            }
            
            juices[name] -= (numberOfBottles * quantityPerBottle);
        }
    }


    for (const [name, numberOfBottles] of Object.entries(bottles)) {
        console.log(`${name} => ${numberOfBottles}`);
    }
}

printJuicesBottles(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

printJuicesBottles(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);
