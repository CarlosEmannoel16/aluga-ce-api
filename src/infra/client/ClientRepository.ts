import { FindClientByIdProtocolRepository } from "@/protocols/repository/client/findClientByIdProtocolRepository";
import dataBase from "../../loaders/database";
import { ClientFactory } from "@/domain/client/factory/client-factory";
import { Address } from "@/domain/client/value-object/address";
import { Client } from "@/domain/client/entity/client";

export class ClientRepository implements FindClientByIdProtocolRepository {
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
          result.city
        ),
      });
    }
  }
}
