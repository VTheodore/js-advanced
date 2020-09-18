function parseScoreToHTML(input) {
    input = JSON.parse(input);

    let res = '<table>\n';
    res += '\t<tr><th>name</th><th>score</th></tr>\n';

    for (const obj of input) {
        const name = obj.name.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

        const line = `\t<tr><td>${name}</td><td>${obj.score}</td></tr>\n`;
        res += line;
    } 

    return res.concat('</table>');
}

const res = parseScoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
console.log(res);

const res2 = parseScoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
console.log(res2);