import DureeLimite from "../interfaces/DureeLimite";

export default class Stagiaire implements DureeLimite {
    _nom: string;
    _prenom: string;
    _finContrat: Date;
    _debutContrat: Date;
  
    constructor(
      nom: string,
      prenom: string,
      finContrat: Date,
    ) {
      this._nom = nom;
      this._prenom = prenom;
      this._finContrat = finContrat;
      this._debutContrat = new Date();
    }
  
    prolonger(jours: number): string {
      this._finContrat.setDate(this._finContrat.getDate() + jours);
      return `Prolongé jusqu'au ${this._finContrat.toLocaleDateString()}`;
    }
  
    travailler(): string {
      return `${this._nom} ${this._prenom} apporte le café et fait les photocopies`;
    }
  }