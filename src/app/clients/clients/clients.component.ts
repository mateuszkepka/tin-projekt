import { Component, OnInit } from '@angular/core';

import { Client } from '../client.model';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clients = this.clientsService.getClients();
  }
}
