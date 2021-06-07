import { EmployeeRepository } from './employee-repository';
import { TaxCalculator } from './tax-calculator';
import { EmployeeType } from '../interfaces/employee.interface';

export class Employee {
  private _id!: string;
  private _name!: string;
  private _address!: string;
  private _type!: EmployeeType;
  private _contactNumber!: string;

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  public get type(): EmployeeType {
    return this._type;
  }

  public set type(value: EmployeeType) {
    this._type = value;
  }

  public get contactNumber(): string {
    return this._contactNumber;
  }

  public set contactNumber(value: string) {
    this._contactNumber = value;
  }

  public save(): void {
    const employeeRepository = new EmployeeRepository();
    employeeRepository.save(this);
  }

  public calculateTax(): void {
    const taxCalculator = new TaxCalculator();
    taxCalculator.calculateTax(this);
  }
}
