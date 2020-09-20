function solve(kingdomArgs, fightArgs) {
    const kingdoms = {};

    for (const obj of kingdomArgs) {
        if (!kingdoms.hasOwnProperty(obj.kingdom)) {
            kingdoms[obj.kingdom] = {};
        }

        const kingdom = kingdoms[obj.kingdom];

        if (!kingdom.hasOwnProperty(obj.general)) {
            kingdom[obj.general] = {};
        }

        const general = kingdom[obj.general];

        if (!general.hasOwnProperty('army')) {
            general['army'] = obj.army;
            general['wins'] = 0;
            general['losses'] = 0;
        } else {
            general['army'] += obj.army;
        }
    }

    for (const fightArg of fightArgs) {

        if (kingdoms.hasOwnProperty(fightArg[0]) && kingdoms.hasOwnProperty(fightArg[2])) {
            const attackingKingdom = kingdoms[fightArg[0]];
            const deffendingKingdom = kingdoms[fightArg[2]];

            const attackingGeneral = fightArg[1];
            const deffendingGeneral = fightArg[3];

            if (fightArg[0] !== fightArg[2]) { // generals from one kingdom cant attack each other
                if (attackingKingdom.hasOwnProperty(attackingGeneral) && deffendingKingdom.hasOwnProperty(deffendingGeneral)) {
                    const attackingArmy = attackingKingdom[attackingGeneral].army;
                    const deffendingArmy = deffendingKingdom[deffendingGeneral].army;

                    if (attackingArmy > deffendingArmy) {
                        attackingKingdom[attackingGeneral].army = Math.floor(1.1 * attackingArmy);
                        deffendingKingdom[deffendingGeneral].army = Math.floor(0.9 * deffendingArmy);

                        attackingKingdom[attackingGeneral].wins += 1;
                        deffendingKingdom[deffendingGeneral].losses += 1;
                    } else if (attackingArmy < deffendingArmy) {
                        attackingKingdom[attackingGeneral].army = Math.floor(0.9 * attackingArmy);
                        deffendingKingdom[deffendingGeneral].army = Math.floor(1.1 * deffendingArmy);

                        attackingKingdom[attackingGeneral].losses += 1;
                        deffendingKingdom[deffendingGeneral].wins += 1;
                    }
                }
            }
        }
    }

    const winningKingdom = Object.keys(kingdoms).sort((k1, k2) => {
        const k1Statistics = getStatistics(k1);
        const k2Statistics = getStatistics(k2);

        if (k1Statistics.wins > k2Statistics.wins) return -1;
        else if (k1Statistics.wins < k2Statistics.wins) return 1;

        if (k1Statistics.losses > k2Statistics.losses) return 1;
        else if (k1Statistics.losses < k2Statistics.losses) return -1;

        return k1.localeCompare(k2);
    })[0];

    const winningGenerals = kingdoms[winningKingdom];

    const sortedGeneralNames = Object.keys(kingdoms[winningKingdom]).sort((g1, g2) => {
        const g1Army = winningGenerals[g1].army;
        const g2Army = winningGenerals[g2].army;

        if (g1Army > g2Army) return -1;
        else if (g1Army < g2Army) return 1;

        return 0;
    });

    console.log(`Winner: ${winningKingdom}`);

    for (const generalName of sortedGeneralNames) {
        const general = winningGenerals[generalName];

        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${general.army}`);
        console.log(`---wins: ${general.wins}`);
        console.log(`---losses: ${general.losses}`);
    }

    function getStatistics(kingdomName) {
        const kingdom = kingdoms[kingdomName];

        const statistics = {
            wins: 0,
            losses: 0
        };

        for (const general of Object.keys(kingdom)) {
            statistics.wins += kingdom[general].wins;
            statistics.losses += kingdom[general].losses;
        }

        return statistics;
    }
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);

console.log('');

solve([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 5000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
);