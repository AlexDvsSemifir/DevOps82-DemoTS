import DureeLimite from "../interfaces/DureeLimite";
import Remunere from "../interfaces/Remunere";

export default class Cdd implements Remunere, DureeLimite {
    _nom: string;
    _prenom: string;
    _finContrat: Date;
    _debutContrat: Date;
    _salaire: number;
  
    constructor(
      nom: string,
      prenom: string,
      finContrat: Date,
      salaire: number
    ) {
      this._nom = nom;
      this._prenom = prenom;
      this._finContrat = finContrat;
      this._debutContrat = new Date();
      this._salaire = salaire;
    }
  
    prolonger(jours: number): string {
      this._finContrat.setDate(this._finContrat.getDate() + jours);
      return `Prolongé jusqu'au ${this._finContrat.toLocaleDateString()}`;
    }
  
    travailler(): string {
      return `${this._nom} ${this._prenom} travaille bien pour gratter un CDI ce creuvard`;
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
  }
  