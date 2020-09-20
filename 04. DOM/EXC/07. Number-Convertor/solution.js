function solve() {
    const toBinaryOption = document.createElement('option');
    toBinaryOption.textContent = 'Binary';
    toBinaryOption.value = 'binary';

    const toHexadecimal = document.createElement('option');
    toHexadecimal.textContent = 'Hexadecimal';
    toHexadecimal.value = 'hexadecimal';

    const selectMenuTo = document.getElementById('selectMenuTo');
    selectMenuTo.appendChild(toBinaryOption);
    selectMenuTo.appendChild(toHexadecimal);

    const resultInputElement = document.getElementById('result');
    const convertButton = document.querySelector('#container button');

    convertButton.addEventListener('click', convert);

    function convert() {
        const selectedOption = document.querySelector('#container #selectMenuTo option:checked').value;

        if(selectedOption) {
            const inputElement = document.getElementById('input');
            const numberToConvert = Number(inputElement.value);

            let res;

            if (selectedOption === 'binary') {
                res = numberToConvert.toString(2);
            } else if (selectedOption === 'hexadecimal') {
                res = numberToConvert.toString(16).toLocaleUpperCase();
            }

            resultInputElement.value = res;
        }
    }
}