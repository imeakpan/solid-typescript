"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const inhouse_product_1 = require("./inhouse-product");
class PricingUtils {
    main() {
        const product1 = new product_1.Product('Product 1');
        const product2 = new product_1.Product('Product 2');
        const product3 = new inhouse_product_1.InHouseProduct('Product 3');
        const productList = [product1, product2, product3];
        productList.forEach(product => {
            console.log(`${product.name} discount:  ${product.getDiscount()}`);
        });
    }
}
exports.PricingUtils = PricingUtils;
