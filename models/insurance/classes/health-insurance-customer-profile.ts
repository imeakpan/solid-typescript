import { CustomerProfile } from '../interfaces/customer-profile';

export class HealthInsuranceCustomerProfile implements CustomerProfile {

  public isLoyalCustomer(): boolean {
    return Math.random() >= 0.5;
  }
}
