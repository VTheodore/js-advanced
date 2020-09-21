function deleteByEmail() {
    const inputTextElement = document.querySelector('input[name="email"]');
    const input = inputTextElement.value;

    if (input.length === 0) return;
    
    const tdEmailElements = document.querySelectorAll('#customers td:nth-child(2)');
    const emails = Array.from(tdEmailElements).map(td => td.textContent);
    const resultDiv = document.getElementById('result');

    if (resultDiv.textContent.length !== 0) {
        resultDiv.textContent = '';
    }

    if (emails.includes(input)) {
        const trToRemove = tdEmailElements[emails.indexOf(input)].parentElement;
        trToRemove.remove();
        resultDiv.appendChild(document.createTextNode('Deleted.'));
    } else {
        resultDiv.appendChild(document.createTextNode('Not found.'));
    }

    inputTextElement.value = '';
}