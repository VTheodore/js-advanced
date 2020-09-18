function printSortedUsernames(input) {
    Array
        .from(new Set(input))
        .sort(compareUsernames)
        .forEach(username => console.log(username));

    function compareUsernames(u1, u2) {
        if (u1.length < u2.length) return -1;
        else if (u1.length > u2.length) return 1;

        return u1.localeCompare(u2);
    }
}

const res1 = printSortedUsernames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']);

const res2 = printSortedUsernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);

console.log(res1);
console.log(res2);