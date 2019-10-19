export class Conseiller {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  login: string;
  password: string;

  constructor( nom: string,   prenom: string,   adresse: string,    email: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.email = email;
  }

}
