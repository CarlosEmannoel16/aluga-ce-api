export class Client {
  private _id: string;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _cpf: string;

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
  }

  validate(): void {
    if (!this._name) throw new Error("Name is required");
    if (!this._email) throw new Error("Email is required");
    if (!this._phone) throw new Error("Phone is required");
    if (!this._cpf) throw new Error("CPF is required");
  }
}
