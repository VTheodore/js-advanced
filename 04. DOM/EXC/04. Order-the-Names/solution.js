function solve() {
    const liElements = document.querySelectorAll('#exercise li');
    const buttonElement = document.querySelector('#exercise button');
    const inputElement = document.querySelector('#exercise input');

    buttonElement.addEventListener('click', () => {
        let input = inputElement.value;
        if (input === '') return;
        
        const index = (input.toLowerCase()).charCodeAt(0) - 97; // EG. 'b' is 98. 98 - 97 = 1 => li element at 1st index

        if (index >= 0 && index <= 27) {
            const currentLi = liElements[index];
            input = input[0].toLocaleUpperCase() + input.slice(1);

            if (currentLi.textContent === '') {
                currentLi.textContent = input;
            } else {
                currentLi.textContent += `, ${input}`;
            }
        }

        inputElement.value = '';
    });
}