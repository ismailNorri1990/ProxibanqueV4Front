import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/model/conseiller.model';
import { Router } from '@angular/router';
import { ConseillersService } from 'src/app/services/conseillers.service';

@Component({
  selector: 'app-create-conseiller',
  templateUrl: './create-conseiller.component.html',
  styleUrls: ['./create-conseiller.component.css']
})
export class CreateConseillerComponent implements OnInit {
  conseiller: Conseiller = new Conseiller( '', '', '', '') ;

  constructor(private conseillerService: ConseillersService, private router: Router) { }

  ngOnInit() {
  }

  creerConseiller(): void {
    this.conseillerService.creerConseiller(this.conseiller)
        .subscribe( data => {
          alert('le conseiller a bien été créé.');
          this.router.navigate(['/list-conseillers']);
        });

  }

}
