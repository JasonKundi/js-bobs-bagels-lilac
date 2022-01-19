const basket = require("./basket.js")
const inventory = require("./inventory.js");

class Price {
    constructor(price) {
        this.price = price
        this.basket = basket
        this.inventory = inventory
        

    }
    getItemPrice(product) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].sku === product) {
                return `The price of the item is £${inventory[i].price}`
            }
        }
        return 'The product is not available'
    }

    getBasketTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.basket.length; i++) {
            totalPrice += this.basket[i].price
        }
        return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
    }


}

module.exports = Price