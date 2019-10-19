import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clients.service';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})

export class CreateClientComponent implements OnInit {

  client: Client = new Client( '', '', '', '') ;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  creerClient(): void {
    this.clientService.creerClient(this.client)
        .subscribe( data => {
          alert('le client a bien été créé.');
          this.router.navigate(['/list-clients']);
        });

  }

}
