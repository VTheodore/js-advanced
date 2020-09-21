function addItem() {
    const inputElement = document.getElementById('newItemText');
    const inputValue = inputElement.value;

    if (inputValue !== '') {
        const items = document.getElementById('items');

        const newLiElement = document.createElement('li');
        newLiElement.appendChild(document.createTextNode(inputValue));
    
        items.appendChild(newLiElement);
        inputElement.value = '';
    }
}