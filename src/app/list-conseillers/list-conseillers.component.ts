import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../model/conseiller.model';
import { ConseillersService } from '../services/conseillers.service';

@Component({
  selector: 'app-list-conseillers',
  templateUrl: './list-conseillers.component.html',
  styleUrls: ['./list-conseillers.component.css']
})
export class ListConseillersComponent implements OnInit {

  conseillers: Conseiller[];

  constructor(private conseillerService: ConseillersService) { }

  ngOnInit() {
    this.conseillerService.getAllConseiller().subscribe(
    response => {this.conseillers = response; }
   );

   }

   effacerClient(conseiller: Conseiller): void {
    this.conseillerService.effacerConseiller(conseiller)
      .subscribe( data => {
        this.conseillers = this.conseillers.filter(u => u !== conseiller);
      });
  }
}
