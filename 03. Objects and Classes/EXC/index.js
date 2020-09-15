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

        const currQuantity = juices[name];
        
        if (currQuantity >= quantityPerBottle) {
            const numberOfBottles = ~~(currQuantity / quantityPerBottle);

            if (bottles[name] === undefined) {
                bottles[name] = numberOfBottles;
            } else {
                bottles[name] += numberOfBottles;
            }
            
            juices[name] -= numberOfBottles * quantityPerBottle;
        }
    }


    for (const [name, numberOfBottles] of Object.entries(bottles)) {
        console.log(`${name} => ${numberOfBottles}`);
    }
}

// printJuicesBottles(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);

// printJuicesBottles(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']);

/**
 * 
 * @param {Array} input 
 */
function storeCatalogue(input) {
    const catalogue = {};

    for (const line of input) {
        const [name, price] = line.split(':').filter(w => w !== '').map(w => w.trim());
        const letter = name[0].toUpperCase();

        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }

        catalogue[letter][name] = price;
    }

    const sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}));

    for (const key of sortedKeys) {
        console.log(key);

        const products = catalogue[key];

        Object
        .keys(products)
        .sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}))
        .forEach(pName => console.log(`  ${pName}: ${products[pName]}`));
    }
}

// storeCatalogue(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']
// );

// storeCatalogue(['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']);

/**
 * 
 * @param {Array} input 
 */
function printCarMakeModelAndQuantitySorted(input) {
    const cars = {};

    for (const line of input) {
        const lineArgs = line.split('|').filter(arg => arg !== '').map(arg => arg.trim());
        const [make, model] = lineArgs;
        const quantity = Number(lineArgs[2]);

        if (!cars.hasOwnProperty(make)) {
            cars[make] = {};
        }

        if (!cars[make].hasOwnProperty(model)) {
            cars[make][model] = quantity;
        } else {
            cars[make][model] += quantity;
        }
    }

    for (const make of Object.keys(cars)) {
        console.log(make);
        const models = cars[make];

        for (const model of Object.keys(models)) {
            console.log(`###${model} -> ${models[model]}`);
        }
    }
}

// printCarMakeModelAndQuantitySorted(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
// );

/**
 * 
 * @param {Array} input 
 */
function printSystemComponents(input) {
    const systems = {};

    for (const line of input) {
        const [systemName, componentName, subcomponentName] = line.split('|').filter(arg => arg !== '').map(arg => arg.trim());

        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        } 

        if (!systems[systemName].hasOwnProperty(componentName)) {
            systems[systemName][componentName] = [];
        }

        systems[systemName][componentName].push(subcomponentName);
    }

    const sortedSystemNames = Object.keys(systems).sort((s1, s2) => {
        const s1ComponentNames = Object.keys(systems[s1]);
        const s2ComponentNames = Object.keys(systems[s2]);

        if (s1ComponentNames.length < s2ComponentNames.length) return 1;
        else if (s1ComponentNames.length > s2ComponentNames.length) return -1;

        return s1.localeCompare(s2);
    });

    for (const systemName of sortedSystemNames) {
        console.log(systemName);

        const components = systems[systemName];

        const sortedComponentNames = Object.keys(components).sort((c1, c2) => {
            const c1Subcomponents = components[c1];
            const c2Subcomponents = components[c2];

            return c2Subcomponents.length - c1Subcomponents.length;
        })

        for (const componentName of sortedComponentNames) {
            console.log(`|||${componentName}`);
            
            const subcomponents = components[componentName];
            subcomponents.forEach(s => console.log(`||||||${s}`));
        }
    }
}

// printSystemComponents(['SULS | Main Site | Home Page',
// 'SULS | Main Site | Login Page',
// 'SULS | Main Site | Register Page',
// 'SULS | Judge Site | Login Page',
// 'SULS | Judge Site | Submittion Page',
// 'Lambda | CoreA | A23',
// 'SULS | Digital Site | Login Page',
// 'Lambda | CoreB | B24',
// 'Lambda | CoreA | A24',
// 'Lambda | CoreA | A25',
// 'Lambda | CoreC | C4',
// 'Indice | Session | Default Storage',
// 'Indice | Session | Default Security']);
