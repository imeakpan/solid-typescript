"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxCalculator {
    calculateTax(employee) {
        switch (employee.type) {
            case 'full-time':
                //  Tax calculation for full-time employee type
                console.log('calculating tax for full-time employee type');
                break;
            case 'part-time':
                //  Tax calculation for part-time employee type
                console.log('calculating tax for part-time employee type');
                break;
            case 'contract':
                //  Tax calculation for contract employee type
                console.log('calculating tax for contract employee type');
                break;
            default:
                console.log('unknown employee type');
        }
    }
}
exports.TaxCalculator = TaxCalculator;
