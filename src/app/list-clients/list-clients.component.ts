import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
    response => {this.clients = response; }
   );

   }

   effacerClient(client: Client): void {
    this.clientService.effacerClient(client)
      .subscribe( data => {
        this.clients = this.clients.filter(u => u !== client);
      });
  }


}
