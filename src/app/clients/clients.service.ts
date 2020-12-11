import { Injectable } from '@angular/core';
import { ClientsDataService } from '../shared/clients-data.service';

import { Client } from './client.model';

@Injectable()
export class ClientsService {
  private clients: Client[] = [];

  constructor(private clientsDataService: ClientsDataService) {}

  getClients() {
    this.clientsDataService.getClients().subscribe((clients) => {
      for (let client of clients) {
        let newClient = new Client(
          client.firstName,
          client.lastName,
          client.email,
          client.phoneNumber,
          client.address,
          client._id,
          client.createdAt,
          client.updatedAt
        );
        this.clients.push(newClient);
      }
    });
    return this.clients;
  }

  getClient(index: number) {
    this.clientsDataService.getClientById(index).subscribe((client) => {
      let newClient = new Client(
        client.firstName,
        client.lastName,
        client.email,
        client.phoneNumber,
        client.address,
        client._id,
        client.createdAt,
        client.updatedAt
      );
      return newClient;
    });
    return null;
  }

  addClient(client: Client) {
    this.clients.push(client);
    this.clientsDataService
      .addClient(client)
      .subscribe((response) => console.log(response));
  }

  updateClient(client: Client) {
    this.clients[client._id] = client;
    this.clientsDataService
      .updateClient(client)
      .subscribe((response) => console.log(response));
  }

  deleteClient(index: number) {
    this.clients.splice(index, 1);
    this.clientsDataService
      .deleteClient(index)
      .subscribe((response) => console.log(response));
  }
}
