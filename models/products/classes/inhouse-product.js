"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class InHouseProduct extends product_1.Product {
    getDiscount() {
        this.applyExtraDiscount();
        return this.discount;
    }
    applyExtraDiscount() {
        this.discount *= 1.5;
    }
}
exports.InHouseProduct = InHouseProduct;
