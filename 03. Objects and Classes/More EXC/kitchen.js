class Kitchen {
    constructor (budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.menu = {};
        this.actionsHistory = {};
    }

    loadProducts(products) {
        let resMsg = '';

        for (const line of products) {
            const args = line.split(' ').filter(a => a !== '');
            const productName = args.shift();
            const [productQuantity, productPrice] = args.map(a => Number(a));


            if (this.budget - productPrice >= 0) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }

                this.budget -= productPrice;
                resMsg +=  `Successfully loaded ${productQuantity} ${productName}\n`;
            } else {
                resMsg += `There was not enough money to load ${productQuantity} ${productName}\n`;
            }
        }

        return resMsg.trim();
    }

    addToMenu(meal, neededProducts, price) {
        let resMsg = '';

            const products = {};

        for (const line of neededProducts) {
            const productArgs = line.split(' ');
            const productQuantity = Number(productArgs[1]);
            const productName = productArgs[0];

            products[productName] = productQuantity;
        }

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {products, price};
            resMsg += `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?\n`
        } else {
            resMsg += `The ${meal} is already in our menu, try something different.\n`;
        }

        return resMsg.trim();
    }

    showTheMenu() {
        if (this.menu.length === 0) return 'Our menu is not ready yet, please come later...';

        let resMsg = ''
        for (const mealName of Object.keys(this.menu)) {
            resMsg += `${mealName} - $ ${this.menu[mealName].price}\n`;
        }

        return resMsg.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) return `There is not ${meal} yet in our menu, do you want to order something else?`;

        const productsNeeded = this.menu[meal]['products'];

        for (const product of Object.keys(productsNeeded)) {
            if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] < productsNeeded[product]) return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        for (const product of Object.keys(productsNeeded)) {
            this.productsInStock[product] -= productsNeeded[product];
        }

        this.budget += this.menu[meal].price;
        
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));