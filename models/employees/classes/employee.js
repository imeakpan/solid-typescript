"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_repository_1 = require("./employee-repository");
const tax_calculator_1 = require("./tax-calculator");
class Employee {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get contactNumber() {
        return this._contactNumber;
    }
    set contactNumber(value) {
        this._contactNumber = value;
    }
    save() {
        const employeeRepository = new employee_repository_1.EmployeeRepository();
        employeeRepository.save(this);
    }
    calculateTax() {
        const taxCalculator = new tax_calculator_1.TaxCalculator();
        taxCalculator.calculateTax(this);
    }
}
exports.Employee = Employee;
