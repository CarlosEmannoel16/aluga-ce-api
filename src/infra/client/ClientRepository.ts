import { Client } from "@/domain/client/entity/client";
import dataBase from "../../loaders/database";
import { ClientFactory } from "@/domain/client/factory/client-factory";
import { Address } from "@/domain/client/value-object/address";
import {
  CreateClientProtocolRepository,
  FindClientByIdProtocolRepository,
} from "@/protocols/repository/client";

export class ClientRepository
  implements FindClientByIdProtocolRepository, CreateClientProtocolRepository
{
  async create(client: Client): Promise<Client> {
    await dataBase.user.create({
      data: {
        id: client.id,
        name: client.name,
        email: client.email,
        phone_number: client.phone,
        cep: client.address.zipCode,
        street: client.address.street,
        number: client.address.number,
        city: client.address.city,
        password: client.password,
        state: client.address.state,
      },
    });

    return client;
  }
  async findById(id: string): Promise<Client | undefined> {
    const result = await dataBase.user.findFirst({
      where: {
        id,
      },
    });

    if (result) {
      return ClientFactory.generate({
        id: result.id,
        email: result.email,
        name: result.name,
        cpf: "11177765412",
        phone: result.phone_number,
        address: new Address(
          result.street,
          result.number,
          result.cep,
          "",
          result.city,
          result.state
        ),
      });
    }
  }
}
