import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../clients/client.model';

@Injectable({ providedIn: 'root' })
export class ClientsDataService {
  constructor(private httpClient: HttpClient) {}

  getClients() {
    return this.httpClient.get<Client[]>('http://localhost:3000/api/clients');
  }

  getClientById(index: number) {
    return this.httpClient.get<Client>(
      'http://localhost:3000/api/clients/' + index
    );
  }

  addClient(client: Client) {
    return this.httpClient.post<Client>(
      'http://localhost:3000/api/clients',
      client
    );
  }

  updateClient(client: Client) {
    return this.httpClient.put<Client>(
      'http://localhost:3000/api/clients/' + client._id,
      client
    );
  }

  deleteClient(index: number) {
    return this.httpClient.delete<Client>(
      'http://localhost:3000/api/clients/' + index
    );
  }
}
