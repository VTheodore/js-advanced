function solve(input) {
    const gladiators = {};
    const fightSplitter = ' vs ';
    const gladiatorSplitter = ' -> ';

    for (const line of input) {
        if (line.includes(gladiatorSplitter)) {
            const args = line.split(gladiatorSplitter).filter(w => w !== '');

            const [gladiator, technique] = args;
            const skill = Number(args[2]);

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }

            const currGladiatior = gladiators[gladiator];

            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                currGladiatior[technique] = skill;
            } else {
                if (currGladiatior[technique] < skill) {
                    currGladiatior[technique] = skill;
                }
            }

        } else if (line.includes(fightSplitter)) {
            const [gladiator1, gladiator2] = line.split(fightSplitter).filter(w => w !== '');
            
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                if (haveCommonTechnique(gladiator1, gladiator2)) {
                    const gladiator1Skill = getTotalSkill(gladiator1);
                    const gladiator2Skill = getTotalSkill(gladiator2);

                    if (gladiator1Skill > gladiator2Skill) {
                        delete gladiators[gladiator2];
                    } else if (gladiator1Skill < gladiator2Skill) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        } else if (line === 'Ave Cesar') break; // Purposed for different language. No real use here.
    }

    const sortedGladiatorNames = Object.keys(gladiators).sort((g1, g2) => {
        if (getTotalSkill(g1) > getTotalSkill(g2)) return -1;
        else if (getTotalSkill(g1) < getTotalSkill(g2)) return 1;

        return g1.localeCompare(g2); // possible mistake (case sensitive comparison)!
    });

    for (const gladiatorName of sortedGladiatorNames) {
        console.log(`${gladiatorName}: ${getTotalSkill(gladiatorName)} skill`);

        const gladiator = gladiators[gladiatorName];

        const sortedTechniqueNames = Object.keys(gladiator).sort((t1, t2) => {
            if (gladiator[t1] > gladiator[t2]) return -1;
            else if (gladiator[t1] < gladiator[t2]) return 1;

            return t1.localeCompare(t2);
        });

        for (const techniqueName of sortedTechniqueNames) {
            console.log(`- ${techniqueName} <!> ${gladiator[techniqueName]}`);
        }
    }

    function haveCommonTechnique(gladiator1, gladiator2) {
        for (const g1TechniqueName of Object.keys(gladiators[gladiator1])) {
            if (gladiators[gladiator2].hasOwnProperty(g1TechniqueName)) return true;
        }

        return false;
    }

    function getTotalSkill(gladiatorName) {
        const gladiator = gladiators[gladiatorName];

        let totalSkill = 0;
        for (const techniqueName of Object.keys(gladiator)) {
            totalSkill += gladiator[techniqueName];
        }

        return totalSkill;
    }
}

solve(['Pesho -> BattleCry -> 400', 'Gosho -> PowerPunch -> 300', 'Stamat -> Duck -> 200', 'Stamat -> Tiger -> 250', 'Ave Cesar']);
console.log(' ');
solve(['Pesho -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Pesho vs Gladius', 'Gladius vs Julius', 'Gladius vs Gosho', 'Ave Cesar']);