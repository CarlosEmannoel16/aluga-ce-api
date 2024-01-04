export class Property {
  private _id: string;
  private _name: string;
  private _value: number;

  constructor(id: string, name: string, value: number) {
    this._id = id;
    this._name = name;
    this._value = value;
  }

  validate(): void {
    if (!this._id) throw new Error("Id is required");
    if (!this._name) throw new Error("Name is required");
    if (!this._value) throw new Error("Value is required");
  }

  get id(): string {
    return this._id;
  }
}
