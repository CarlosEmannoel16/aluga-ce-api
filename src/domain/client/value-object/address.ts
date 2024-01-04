export class Address {
  private _street: string;
  private _number: string;
  private _complement: string;
  private _zipCode: string;
  private _state!: string;
  private _city: string;

  constructor(
    street: string,
    number: string,
    complement: string,
    zipCode: string,
    city: string,
    state: string
  ) {
    this._street = street;
    this._number = number;
    this._complement = complement;
    this._zipCode = zipCode;
    this._city = city;
    this._state = state;
    this.validate();
  }

  validate(): void {
    const errors: string[] = [];
    if (!this._street) errors.push("[Address]: Street is required");
    if (!this._number) errors.push("[Address]: Number is required");
    if (!this._zipCode) errors.push("[Address]: ZipCode is required");
    if (!this._city) errors.push("[Address]: City is required");
    if (!this._state) errors.push("[Address]: State is required");

    if (errors.length) throw new Error(errors.join(", "));
  }

  toString(): string {
    return `${this._street}, ${this._number} - ${this._city}`;
  }

  get street(): string {
    return this._street;
  }

  get city(): string {
    return this._city;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  get number(): string {
    return this._number;
  }

  get state(): string {
    return this._state;
  }
}
