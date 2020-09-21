function validate() {
    const input = document.getElementById('email');

    input.addEventListener('change', validateInput);

    function validateInput() {
        const regex = /^[a-z]{3,}@([a-z]{3,}.)+[a-z]{2,}$/;
        if (regex.test(input.value)) {
            input.removeAttribute('class');
        } else {
            input.setAttribute('class', 'error');
        }
    }
}