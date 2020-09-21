function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');
    const gradientRect = gradientElement.getBoundingClientRect();

    const gradientX = gradientRect.right - gradientRect.left;
    let percentage;

    gradientElement.addEventListener('mousemove', (e) => {  
        percentage = Math.floor((e.offsetX / gradientX) * 100);

        resultDiv.textContent = percentage + '%';
    });
}