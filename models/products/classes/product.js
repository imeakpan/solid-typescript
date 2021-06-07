"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name) {
        this.discount = 20;
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    getDiscount() {
        return this.discount;
    }
}
exports.Product = Product;
