function addItem() {
    const inputElement = document.getElementById('newText');
    const inputValue = inputElement.value;

    if (inputValue.length === 0) return;

    const items = document.getElementById('items');

    const newLiElement = document.createElement('li');
    newLiElement.appendChild(document.createTextNode(inputValue));

    const remove = document.createElement('a');
    remove.appendChild(document.createTextNode('[Delete]'));
    remove.href = '#';

    remove.addEventListener('click', removeListItem);
    
    newLiElement.appendChild(remove);
    items.appendChild(newLiElement);
    inputElement.value = '';
    

    function removeListItem() {
        newLiElement.remove();        
    }
}