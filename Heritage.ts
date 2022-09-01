abstract class Collaborateur {
  protected _nom: string;
  protected _prenom: string;

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }

  get fullName(): string {
    return `${this._nom} ${this._prenom}`;
  }

  abstract travailler(): string;
}

class Salarie extends Collaborateur {
  private _salaire: number;

  constructor(nom: string, prenom: string, salaire: number) {
    super(nom, prenom);
    this._salaire = salaire;
  }

  travailler(): string {
    return `${this._nom} ${this._prenom} travaille comme un fou pour gratter une augmentation !`;
  }

  public augmentation(percent: number): void {
    if (percent > 0 && percent <= 100) {
      console.log(
        `Le salaire de ${this._nom} ${this._prenom} va être augmenté de ${percent}. Valeure actuelle : ${this._salaire}`
      );

      const augmentation = (this._salaire * percent) / 100;

      console.log(`Il sera augmenté de ${augmentation}€`);

      this._salaire += augmentation;

      console.log(`Son nouveau salaire est : ${this._salaire} €`);
    } else {
      throw new Error("Le pourcentage est incorrect");
    }
  }
}

class Stagiaire extends Collaborateur {
  private _finContrat!: Date;

  constructor(nom: string, prenom: string, finContrat: Date | string) {
    super(nom, prenom);
    this.finContrat = finContrat;
  }

  get finContrat(): string {
    return this._finContrat.toLocaleDateString();
  }

  set finContrat(nouvelleDate: Date | string) {
    if (nouvelleDate instanceof Date) {
      this._finContrat = nouvelleDate;
    } else {
      this._finContrat = new Date(nouvelleDate);
    }
  }

  prolonger(jours: number): string {
    this._finContrat.setDate(this._finContrat.getDate() + jours);
    return `Prolongé jusqu'au ${this._finContrat.toLocaleDateString()}`;
  }

  travailler(): string {
    return `${this._nom} ${this._prenom} apporte le café et fait les photocopies`;
  }
}

const employee: Salarie = new Salarie("Halliday", "Johnny", 1000);
const constantin: Stagiaire = new Stagiaire(
  "Mouchard",
  "Con Stantin",
  "2022/01/01"
);

console.log(employee.fullName);
console.log(constantin.fullName);
// employee.augmentation(10)
// console.log(employee.travailler())

// console.log(constantin.finContrat)
// console.log(constantin.prolonger(-9999))
