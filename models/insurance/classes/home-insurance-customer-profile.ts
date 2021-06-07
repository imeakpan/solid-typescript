import { CustomerProfile } from '../interfaces/customer-profile';

export class HomeInsuranceCustomerProfile implements CustomerProfile {

  public isLoyalCustomer(): boolean {
    return Math.random() >= 0.5;
  }
}
