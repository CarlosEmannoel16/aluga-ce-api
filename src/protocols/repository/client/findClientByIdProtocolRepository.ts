import { Client } from "@/domain/client/entity/client";

export interface FindClientByIdProtocolRepository {
  findById(id: string): Promise<Client | undefined>;
}
