import Remunere from '../interfaces/Remunere'

export default class Cdi implements Remunere {
    _nom: string;
    _prenom: string;
    _salaire: number;
  
    constructor(nom: string, prenom: string, salaire: number) {
      this._nom = nom;
      this._prenom = prenom;
      this._salaire = salaire;
    }
    augmentation(pourcentage: number): void {
      if (pourcentage > 0 && pourcentage <= 100) {
        const augmentation = (this._salaire * pourcentage) / 100;
        this._salaire += augmentation;
        console.log(`Son nouveau salaire est : ${this._salaire} €`);
      } else {
        throw new Error("Le pourcentage est incorrect");
      }
    }
    travailler(): string {
      return `${this._nom} ${this._prenom} travaille comme un fou pour gratter une augmentation !`;
    }
  }