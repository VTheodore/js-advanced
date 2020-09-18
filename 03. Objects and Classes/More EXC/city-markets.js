function printCityProducts(input) {
    const citiesWithProducts = {};

    for (const line of input) {
        const lineArgs = line.split('->').filter(arg => arg !== '').map(arg => arg.trim());
        const [town, product] = lineArgs;
        const [amountOfSales, priceForOneUnit] = lineArgs[2].split(' : ').filter(w => w !== '').map(w => Number(w));

        if (!citiesWithProducts.hasOwnProperty(town)) {
            citiesWithProducts[town] = {};
        }

        const currProduct = citiesWithProducts[town]
        const currIncome = amountOfSales * priceForOneUnit;

        if (!currProduct.hasOwnProperty(product)) {
            currProduct[product] = currIncome;
        } else {
            currProduct[product] += currIncome;
        }
    }

    for (const townName of Object.keys(citiesWithProducts)) {
        console.log(`Town - ${townName}`);

        const products = citiesWithProducts[townName];

        for (const productName of Object.keys(products)) {
            console.log(`$$$${productName} : ${products[productName]}`);
        }
    }
}

printCityProducts(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);