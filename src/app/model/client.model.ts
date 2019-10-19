export class Client {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;

  constructor( nom: string,   prenom: string,   adresse: string,    email: string) {
  this.nom = nom;
  this.prenom = prenom;
  this.adresse = adresse;
  this.email = email;
}

}
