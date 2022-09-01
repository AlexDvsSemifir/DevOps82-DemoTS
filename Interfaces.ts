interface Collaborateur {
  _nom: string;
  _prenom: string;
  /**
   * Indique ce que fait le collaborateur
   */
  travailler(): string;
}

interface Remunere extends Collaborateur {
  _salaire: number;
  /**
   * Augmete le salaure d'un collaborateur
   * @param pourcentage pourcentage de l'augmentation
   */
  augmentation(pourcentage: number): void;
}

interface DureeLimite extends Collaborateur {
  _debutContrat: Date;
  _finContrat: Date;
  prolonger(jours: number): void;
}

class CDI implements Remunere {
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

class Stagiaire implements DureeLimite {
  _nom: string;
  _prenom: string;
  _finContrat: Date;
  _debutContrat: Date;

  constructor(
    nom: string,
    prenom: string,
    finContrat: Date,
    debutContrat: Date
  ) {
    this._nom = nom;
    this._prenom = prenom;
    this._finContrat = finContrat;
    this._debutContrat = debutContrat;
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

class CDD implements Remunere, DureeLimite {
  _nom: string;
  _prenom: string;
  _finContrat: Date;
  _debutContrat: Date;
  _salaire: number;

  constructor(
    nom: string,
    prenom: string,
    finContrat: Date,
    debutContrat: Date,
    salaire: number
  ) {
    this._nom = nom;
    this._prenom = prenom;
    this._finContrat = finContrat;
    this._debutContrat = debutContrat;
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
