import { CustomerProfile } from '../interfaces/customer-profile';

export class VehicleInsuranceCustomerProfile implements CustomerProfile {

  public isLoyalCustomer(): boolean {
    return Math.random() >= 0.5;
  }
}
