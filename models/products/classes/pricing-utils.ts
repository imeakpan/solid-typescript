import { Product } from './product';
import { InHouseProduct } from './inhouse-product';

export class PricingUtils {

  public main(): void {
    const product1 = new Product('Product 1');
    const product2 = new Product('Product 2');
    const product3 = new InHouseProduct('Product 3');

    const productList: Array<Product> = [product1, product2, product3];

    productList.forEach(product => {
      console.log(`${product.name} discount:  ${product.getDiscount()}`);
    });
  }
}
