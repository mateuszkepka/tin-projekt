import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../client.model';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientId: number;
  client: Client;

  constructor(private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientId = parseInt(this.route.snapshot.paramMap.get(`id`));
    this.client = this.clientsService.getClient(this.clientId);
    console.log(this.client);
  }

}
