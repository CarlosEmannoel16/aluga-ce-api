import { Address } from "../value-object/address";
import { Client } from "../entity/client";
import { v4 as uuid } from "uuid";

interface paramsClientFactory {
  id?: string;
  cpf: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export class ClientFactory {
  static generate({
    id,
    cpf,
    name,
    email,
    phone,
    address,
  }: paramsClientFactory) {
    let idUser = id;
    if (!idUser) idUser = uuid();
    const client = new Client(idUser, name, email, phone, cpf);

    if (address) client.address = address;

    return client;
  }
}
