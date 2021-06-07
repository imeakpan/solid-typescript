import { Employee } from './models/employees/classes/employee';
import { HealthInsuranceCustomerProfile } from './models/insurance/classes/health-insurance-customer-profile';
import { InsurancePremiumDiscountCalculator } from './models/insurance/classes/insurance-premium-discount-calculator';
import { HomeInsuranceCustomerProfile } from './models/insurance/classes/home-insurance-customer-profile';
import { VehicleInsuranceCustomerProfile } from './models/insurance/classes/vehicle-insurance-customer-profile';
import { PricingUtils } from './models/products/classes/pricing-utils';

// Single Responsibility Principle
const fullTimeEmployee = new Employee();
fullTimeEmployee.type = 'full-time';
fullTimeEmployee.calculateTax();
fullTimeEmployee.save();

const partTimeEmployee = new Employee();
partTimeEmployee.type = 'part-time';
partTimeEmployee.calculateTax();
partTimeEmployee.save();

const contractEmployee = new Employee();
contractEmployee.type = 'contract';
contractEmployee.calculateTax();
contractEmployee.save();

// Open Closed Principle
const insurancePremiumDiscountCalculator = new InsurancePremiumDiscountCalculator();

const healthInsuranceCustomer = new HealthInsuranceCustomerProfile();
const healthInsuranceCustomerDiscount = insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(healthInsuranceCustomer);
console.log('healthInsuranceCustomerDiscount', healthInsuranceCustomerDiscount);

const homeInsuranceCustomer = new HomeInsuranceCustomerProfile();
const homeInsuranceCustomerDiscount = insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(homeInsuranceCustomer);
console.log('homeInsuranceCustomerDiscount', homeInsuranceCustomerDiscount);

const vehicleInsuranceCustomer = new VehicleInsuranceCustomerProfile();
const vehicleInsuranceCustomerDiscount = insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(vehicleInsuranceCustomer);
console.log('vehicleInsuranceCustomerDiscount', vehicleInsuranceCustomerDiscount);

// Liskov Substitution Principle
const pricingUtils = new PricingUtils();
pricingUtils.main();
