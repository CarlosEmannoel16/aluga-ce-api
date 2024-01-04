import { Client } from "@/domain/client/entity/client";

export interface CreateClientProtocolRepository {
  create(client: Client): Promise<Client>;
}
