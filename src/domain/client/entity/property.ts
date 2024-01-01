export class Property {
  private _id: string;
  private _name: string;
  private _value: number;

  constructor(id: string,name: string, value: number) {
    this._id = id;
    this._name = name;
    this._value = value;
  }
}
