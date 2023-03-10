/*classi*/


/*
class Calculator {
    #_displayResult = 0;

    get displayResult(){
        return this.#_displayResult;
    }

    constructor(num1, num2, result){
        this.result = result;
    }

    sum(num1, num2){
        return result = num1 + num2;
    }

    minus(num1, num2){
        return result = num1 - num2;
    }

    multiplier(num1, num2){
        return result = num1 * num2;
    }

    divider(num1, num2){
        return result = num1 / num2;
    }
};
let c = new Calculator;
console.log(c.sum(2,2));

*/
/*come andava fatto*/

/*
class Calculator {
    #_display;

    constructor(){
        this.#_display = 0;
    }

    get display(){
        return this.#_display;
    }

    reset(){
        this.#_display = 0;
    }

    sum(num1, num2){
        return this.#_display = num1 + num2;
    }

    minus(num1, num2){
        return this.#_display = num1 - num2;
    }

    multiplier(num1, num2){
        return this.#_display = num1 * num2;
    }

    divider(num1, num2){
        return this.#_display = num1 / num2;
    }
};

const calc = new Calculator();
calc.sum(3,3);
console.debug(calc.display)

*/

/*macchinetta*/

/*
class VendorMachine {
    #_display;

    constructor() {
        this.#_display = 0;
    }

    get display(){
        return this.#_display;
    }

    code(){
        return this.#_display = num;
    }

    reset(){
        this.#_display = 0;
    }

    [; [new Prodotti("biscotti", "Ringo", 2)]; [new Prodotti("acqua", "rocchetta", 3)]];
};

class Prodotti{
    constructor(name, brand, codice){
        this.name = name
        this.brand = brand
        this.codice = codice
    }
}

*/

/*rivedere a casa*/

class VendorMachine {
    #_products;
    #_display;
    #_price;

    constructor(products){
        this.#_products = products;
        this.#_display = "Seleziona il prodotto";
        this.#_price = 0;
    };
    get products (){
        return this.#_products;
    }
    get display(){
        return this.#_display;
    }
    get price(){
        return this.#_price
    }

    #_isAffordable(product, price) {
        return product.prezzo <= price;
    }

    control(productCode){
        if(!this.#_products[productCode]){
            this.#_display = "Prodotto non esistente";
            return;
        }
        if(!this.#_products[productCode].length){
            this.#_display = "Prodotto non disponibile";
            return;
        }
        if (!this.#_isAffordable(this.#_products[productCode][0], this.#_price)) {
            this.#_display = "Denaro non sufficiente";
            return;
        }
        return this.#_products[productCode].pop();
    }
    insertMoney(amount) {
        this.#_price += price;
    }


}
class Prodotti{
    constructor(name, brand, codice, prezzo){
        this.name = name;
        this.brand = brand;
        this.codice = codice
        this.prezzo = prezzo
    }
}
const productsBox = [
    new Prodotti("biscotti", "Ringo", 1, 2),
    new Prodotti("patatine", "Lays", 2, 1.50),
    new Prodotti("bibite", "acqua", 3, 0.50)
]
const products = [];
for (let outeridx = 0; outeridx < 3; outeridx ++){
    if(products[outeridx] === undefined){
        products[outeridx] = [];
    }
    for(let inneridx = 0; inneridx <5; inneridx++){
        products[outeridx].push(productsBox[outeridx]);
    }
}
const vMachine = new VendorMachine(products);
vMachine.insertMoney(2);
const product = vMachine.buy(0);
console.log(product);
console.debug(vMachine.products);