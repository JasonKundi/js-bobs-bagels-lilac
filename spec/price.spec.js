const Price = require("../src/Price.js");
const Basket = require("../src/basket.js");

describe("Basket", () => {
    let price
    let basket
  
    beforeEach(() => {
      price = new Price();
      basket = new Basket();
    });
    it("a user can check item price before adding it to the basket", () => {
        const expected = 'The price of the item is £2.99'
        const result = price.getItemPrice('BGSN')
        expect(result).toEqual(expected);
      });
    
      it("a user knows the total price of the items in their basket", () => {
        const expected = 'The total price of the items in your basket is £1.37'
        basket.addItemToBasket('BGLO')
        basket.addItemToBasket('BGLP')
        basket.addItemToBasket('BGLS')
        const result = price.getBasketTotal()
        expect(result).toEqual(expected);
      });



});