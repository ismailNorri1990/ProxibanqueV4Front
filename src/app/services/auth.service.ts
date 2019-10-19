import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

authentification( login, password) {
    if (login === 'groupeC' && password === 'test') {
      sessionStorage.setItem('login', login);
      return true;
    } else {
      return false;
    }
  }

isUserLoggedIn() {
    const conseiller = sessionStorage.getItem('login');
    console.log(!(conseiller === null));
    return !(conseiller === null);
  }

logOutConseiller() {
    sessionStorage.removeItem('login');
  }
}
