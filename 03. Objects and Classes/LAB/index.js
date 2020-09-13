"use strict"

/**
 * 
 * @param {Array} input 
 */
function townsToJSON(input) {
    const pattern = '|';
    const properties = input[0].split(pattern).filter(arg => arg !== '').map(arg => arg.trim());
    const towns = [];

    for (let i = 1; i < input.length; i++) {
        const values = input[i].split(pattern).filter(arg => arg !== '').map(arg => arg.trim());
        const town = {};

        properties.forEach((property, index) => {
            if (index !== 0) {
                town[property] = +(Number(values[index]).toFixed(2));
            } else {
                town[property] = values[index];
            }
        });
        towns.push(town);
    }

    return JSON.stringify(towns);
}

// const res1 = townsToJSON(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'] );

// const res2 = townsToJSON(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']);

// console.log(res1);
// console.log(res2);

/**
 * 
 * @param {Array} args 
 */
function getSumByTown(args) {
    let towns = {};

    for (let i = 0; i < args.length - 1; i += 2) {
        const townName = args[i];
        const value = Number(args[i + 1]);

        if (towns[townName] === undefined) {
            towns[townName] = value;
        } else {
            towns[townName] += value;
        }
    }

    return JSON.stringify(towns);
}

// const res1 = getSumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
// const res2 = getSumByTown(['Sofia','20','Varna','3','sofia','5','varna','4']);

// console.log(res1);
// console.log(res2);

/**
 * 
 * @param {Array} args 
 */
function printPopulationInTowns(args) {
    const towns = {};

    args.forEach(arg => {
        const lineArg = arg.split('<->').filter(w => w !== '').map(w => w.trim());
        const townName = lineArg[0];
        const population = Number(lineArg[1]);

        if (towns[townName] === undefined) {
            towns[townName] = population;
        } else {
            towns[townName] += population;
        }
    });

    for (const townName in towns) {
        console.log(`${townName} : ${towns[townName]}`);
    }
}

// printPopulationInTowns(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'] 
// );

// console.log(' ');

// printPopulationInTowns(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// );

function fromJSONToHTML(input) {
    const objects = JSON.parse(input);
    let resHTML = '<table>\n  <tr>\n';
    
    for (let property in objects[0]) {
        resHTML += '    <th>';
        resHTML += property.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        resHTML += '</th>\n';
    }

    resHTML += '  </tr>\n';
    
    objects.forEach(obj => {
        resHTML += '  <tr>\n';
        for (let property in obj) {
            resHTML += '    <td>';
            resHTML += obj[property].toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
            resHTML += '</td>\n';
        }
        resHTML += '  </tr>\n';
    })

    resHTML += '</table>';
    return resHTML;
}

// const res1 = fromJSONToHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
// const res2 = fromJSONToHTML(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18, "City":"Veliko Tarnovo"}]']);
// console.log(res1);
// console.log(res2);

class Person {
    constructor (firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());

function getPeople() {
    return [new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), new Person('Softuni'), new Person('Stephan', 'Johnson', 25), new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')];
}

// console.log(getPeople());

class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);


class Point {
    constructor(x, y) {
        this.x = x;
        this.y =  y;
    }

    static distance(p1, p2) {
        const a = Math.abs(p1.x - p2.x);
        const b = Math.abs(p1.y - p2.y);
        return Math.sqrt(a ** 2 + b ** 2);
    }
}

// const p1 = new Point(5, 5);
// const p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));
