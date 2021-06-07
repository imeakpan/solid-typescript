import { CustomerProfile } from '../interfaces/customer-profile';

export class InsurancePremiumDiscountCalculator {

  public calculatePremiumDiscountPercent(customer: CustomerProfile): number {
    if (customer.isLoyalCustomer()) {
      return 20;
    }
    return 0;
  }
}
