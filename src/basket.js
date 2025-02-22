const inventory = require("./inventory.js");
const price = require("./Price.js")

// fix hardcoding for basket size - 
// REMINDER TO SELF - error for manager test case when changing hard code to variable DEFAULT_BASKETSIZE
//let DEFAULT_BASKETSIZE = 5

class Basket {
    constructor(price) {
        this.basket = [];
        this.basketSize = 5 ;
        this.price = price
    };
    
    addItemToBasket(sku) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].sku === sku && this.basket.length < this.basketSize) {
                this.basket.push(inventory[i]);
            }
        }
        return 'You cannot add more than 5 items to your basket!'
    };

    removeItemFromBasket(sku) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].sku === sku) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

   // getItemPrice(product) {
   //     for (let i = 0; i < inventory.length; i++) {
   //         if (inventory[i].sku === product) {
   //             return `The price of the item is £${inventory[i].price}`
   //         }
   //     }
   //     return 'The product is not available'
   // }

    showBasket() {
        return this.basket
    }

   // getBasketTotal() {
   //     let totalPrice = 0;
   //     for (let i = 0; i < this.basket.length; i++) {
   //         totalPrice += this.basket[i].price
   //     }
   //     return `The total price of the items in your basket is £${Number(totalPrice.toFixed(2))}`
   // }
};

module.exports = Basket;
