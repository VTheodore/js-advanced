function solve() {
    const resultTextArea = document.querySelector('textarea');
    const shoppingCart = {};

    const buttonElements = document.querySelectorAll('.add-product');

    buttonElements.forEach(btn => btn.addEventListener('click', () => {
        const currDiv = btn.parentElement.parentElement;

        const productName = currDiv.querySelector('.product-title').textContent;
        const productPrice = Number(currDiv.querySelector('.product-line-price').textContent);

        if (!shoppingCart.hasOwnProperty(productName)) {
            shoppingCart[productName] = productPrice;
        } else {
            shoppingCart[productName] += productPrice;
        }

        resultTextArea.appendChild(document.createTextNode(`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`))
    }));

    const checkoutBtn = document.querySelector('.checkout');
    checkoutBtn.addEventListener('click', checkoutHandler);

    function checkoutHandler() {
        buttonElements.forEach(addBtn => {
            addBtn.setAttribute('disabled', '');
        });

        checkoutBtn.setAttribute('disabled', '');

        const boughtProducts = Object.keys(shoppingCart);
        const totalPrice = boughtProducts.reduce((acc, curr) => {
            return acc + shoppingCart[curr];
        }, 0);

        resultTextArea.appendChild(document.createTextNode(`You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`))
    }

}