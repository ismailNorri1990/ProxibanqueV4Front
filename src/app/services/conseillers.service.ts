import { Injectable } from '@angular/core';
import { Conseiller } from '../model/conseiller.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConseillersService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

  public getAllConseiller() {
    return this.httpClient.get<Conseiller[]>('http://localhost:3000/Conseiller');
  }

  public effacerConseiller(conseiller) {
       return this.httpClient.delete<Conseiller>('http://localhost:3000/Conseiller' + '/' + conseiller.id);
  }

  public creerConseiller(conseiller: Conseiller) {
    return this.httpClient.post<Conseiller>('http://localhost:3000/Conseiller', conseiller);
  }
}
