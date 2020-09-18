function toggle() {
    const extraParagraphElement = document.querySelector('#extra');
    const buttonElement = document.querySelector('.button');

    if (extraParagraphElement.style.display === 'block') {
        extraParagraphElement.style.display = 'none';
        buttonElement.textContent = "More";
    } else {
        extraParagraphElement.style.display = 'block';
        buttonElement.textContent = "Less";
    }
}