function solve() {
    const inputElement = document.getElementById('input');
    const sentences = inputElement.textContent.split('.').filter(s => s !== '').map(s => s.trim());

    const outputElement = document.getElementById('output');

    for (let i = 3; i < sentences.length; i += 3) {
      const paragraphElement = document.createElement('p');
      
      for (let j = i - 3; j < i; j++) {
        paragraphElement.innerText += sentences[i] + '. ';
      }

      outputElement.appendChild(paragraphElement);
    }

    const restCount = sentences.length % 3;
    
    if (restCount > 0) {
      const paragraphElement = document.createElement('p');

      for (let i = restCount; i >= 0; i--) {
        paragraphElement.textContent += sentences[sentences.length - i - 1];
      }

      outputElement.appendChild(paragraphElement);
    }
}