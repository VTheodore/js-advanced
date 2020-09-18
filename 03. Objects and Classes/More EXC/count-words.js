function countWordsInText(text) {
    const pattern = /[^A-Za-z0-9_]+/;

    const words = text[0].split(pattern).filter(w => w !== '');
    const res = {};

    words.forEach(word => {
        if (!res.hasOwnProperty(word)) {
            res[word] = 1;
        } else {
            res[word] += 1;
        }
    });

    return JSON.stringify(res);
}

const res1 = countWordsInText(['Far too slow, you\'re far too slow.']);
const res2 = countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs']);

console.log(res1);
console.log(res2);