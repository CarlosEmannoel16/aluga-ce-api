export class Address {
  _street: string;
  _number: string;
  _complement: string;
  _zipCode: string;
  _city: string;

  constructor(
    street: string,
    number: string,
    complement: string,
    zipCode: string,
    city: string
  ) {
    this._street = street;
    this._number = number;
    this._complement = complement;
    this._zipCode = zipCode;
    this._city = city;

    this.validate();
  }

  validate(): void {
    const errors: string[] = [];
    if (!this._street) errors.push("[Address]: Street is required");
    if (!this._number) errors.push("[Address]: Number is required");
    if (!this._zipCode) errors.push("[Address]: ZipCode is required");
    if (!this._city) errors.push("[Address]: City is required");

    if (errors.length) throw new Error(errors.join(", "));
  }

  toString(): string {
    return `${this._street}, ${this._number} - ${this._city}`;
  }
}
