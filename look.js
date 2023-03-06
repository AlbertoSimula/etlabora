class VendingMachine {
    #_amount;
    #_display;
    #_products;

    constructor(products) {
        this.#_amount = 0;
        this.#_display = "Seleziona prodotto";
        this.#_products = products;
    }

    get amount() {
        return this.#_amount;
    }

    get display() {
        return this.#_display;
    }

    /**
     * Returns true if the product is affordable for the given amount
     * 
     * @param {Product} product 
     * @param {number} amount
     * @returns {boolean}
     */
    #_isAffordable(product, amount) {
        return product.price <= amount;
    }

    /**
     * Returns the product for the given productCode (if available)
     * 
     * @param {number} productCode 
     */
    buy(productCode) {
        // Check if the given productCode (row index) exists
        if (!this.#_products[productCode]) {
            this.#_display = "Prodotto non esistenete";
            return;
        }

        // Check if the product is available
        if (!this.#_products[productCode].length) {
            this.#_display = "Prodotto non disponibile";
            return;
        }

        // Check if the product is affordable
        if (!this.#_isAffordable(this.#_products[productCode][0], this.#_amount)) {
            this.#_display = "Denaro non sufficiente";
            return;
        }

        return this.#_products[productCode].pop();
    }

    /**
     * Add some money
     * 
     * @param {number} amount 
     */
    insertMoney(amount) {
        this.#_amount += amount;
    }
}

class Product {
    constructor(brand, name, price) {
        this.brand = brand;
        this.name = name;
        this.price = price;
    }
}

const productsList = [
    new Product('Crik Crok', 'Patatine', 1.00),
    new Product('Coca Cola', 'Coca Cola', 1.20),
    new Product('Nestlè', 'Snickers', 1.00)
];

const products = [];

for (let outerIdx = 0; outerIdx < 3; outerIdx++) {
    if (products[outerIdx] === undefined) {
        products[outerIdx] = [];
    }

    for (let innerIdx = 0; innerIdx < 5; innerIdx++) {
        products[outerIdx].push(new Product(
            productsList[outerIdx].brand,
            productsList[outerIdx].name,
            productsList[outerIdx].price            
        ));
    }
}

const vMachine = new VendingMachine(products);
vMachine.insertMoney(2);
const product = vMachine.buy(0);
console.log(product);