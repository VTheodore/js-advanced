function addItem() {
    const newItemTextElement = document.querySelector('#newItemText');
    const newItemValueElement = document.querySelector('#newItemValue');

    const optionElement = document.createElement('option');
    optionElement.appendChild(document.createTextNode(newItemTextElement.value));
    optionElement.value = newItemValueElement.value;

    const menuElement = document.querySelector('#menu');
    menuElement.appendChild(optionElement);

    newItemTextElement.value = '';
    newItemValueElement.value = '';
}