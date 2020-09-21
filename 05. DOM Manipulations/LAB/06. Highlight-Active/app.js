function focus() {
    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(input => {
        input.addEventListener('focus', focusIn);
        input.addEventListener('blur', focusOut);
    })

    function focusIn(e) {
        e.target.parentElement.classList.add('focused');
    }

    function focusOut(e) {
        e.target.parentElement.classList.remove('focused');
    }
}