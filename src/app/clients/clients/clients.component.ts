import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../client.model';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clients = this.clientsService.getClients();
  }

  onDetailsClick(id: number) {
    this.router.navigate([`details/${id}`], {relativeTo: this.route});
  }

  onAddClient(){
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
