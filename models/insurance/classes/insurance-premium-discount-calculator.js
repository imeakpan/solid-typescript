"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InsurancePremiumDiscountCalculator {
    calculatePremiumDiscountPercent(customer) {
        if (customer.isLoyalCustomer()) {
            return 20;
        }
        return 0;
    }
}
exports.InsurancePremiumDiscountCalculator = InsurancePremiumDiscountCalculator;
