import { Address } from "../value-object/address";

export class Client {
  private _id: string;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _cpf: string;
  private _password!: string;
  private _address!: Address;

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    cpf: string
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._cpf = cpf;

    this.validate();
  }

  validate(): void {
    const errors: string[] = [];
    if (!this._name) errors.push("[Client]: Name is required");
    if (!this._email) errors.push("[Client]: Email is required");
    if (!this._phone) errors.push("[Client]: Phone is required");
    if (!this._cpf) errors.push("[Client]: Cpf is required");

    if (errors.length) throw new Error(errors.join(", "));
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get cpf(): string {
    return this._cpf;
  }

  get password(): string {
    return this._password;
  }

  changePassword(password: string): void {
    this._password = password;
  }

  set password(password: string) {
    this._password = password;
  }

  set address(address: Address) {
    this._address = address;
  }

  get address(): Address {
    return this._address;
  }
}
