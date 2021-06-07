import { Product } from './product';

export class InHouseProduct extends Product {

  public getDiscount(): number {
    this.applyExtraDiscount();
    return this.discount;
  }

  public applyExtraDiscount(): void {
    this.discount *= 1.5;
  }
}
