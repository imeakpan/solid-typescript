export class Product {
  protected discount = 20;
  private _name!: string;

  constructor(name: string) {
    this.name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public getDiscount(): number {
    return this.discount;
  }
}
