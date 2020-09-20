function solve() {
    const pattern = /^(?<operand1>\d+(.\d+)?) (?<operator>[+*\/-]{1}) (?<operand2>\d+(.\d+)?)$/;

    const expressionOutputElement = document.querySelector('#expressionOutput');
    const resultOutputElement = document.querySelector('#resultOutput');

    document.querySelector('.keys').addEventListener('click', e => {
        const curr = e.target.value;

        if (curr === '=') {
            const match = expressionOutputElement.textContent.match(pattern);
            
            if (match === null) {
                resultOutputElement.textContent = NaN;
            } else {
                const operand1 = Number(match.groups.operand1);
                const operand2 = Number(match.groups.operand2);
                const operator = match.groups.operator;

                resultOutputElement.textContent = evaluate(operator, operand1, operand2);
            }
        } else {
            if (!isNaN(curr) || curr === '.') {
                expressionOutputElement.textContent += curr;
                console.log('digit');
            } else {
                expressionOutputElement.textContent += ` ${curr} `;
                console.log('sign');
            }
        }
    });

    document.querySelector('.clear').addEventListener('click', () => {
        expressionOutputElement.textContent = '';
        resultOutputElement.textContent = '';
    });

    function evaluate(op, op1, op2) {
        switch(op) {
            case '+': return op1 + op2;
            case '-': return op1 - op2;
            case '*': return op1 * op2;
            case '/': return op1 / op2;
        }
    }
}