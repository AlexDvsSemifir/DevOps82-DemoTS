class Employee {
  private _lastName: string;
  private _firstName: string;
  private _salary: number;
  private _birthDate: Date;
  private _celsius: number;

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    birthDate: Date,
    celsius: number
  ) {
    this._salary = salary;
    this._lastName = lastName;
    this._firstName = firstName;
    this._birthDate = birthDate;
    this._celsius = celsius;
  }

  get lastName(): string {
    return this._lastName;
  }

  get age(): any {
    const today = new Date();
    if (today.getMonth() > this._birthDate.getMonth()) {
      return today.getFullYear() - this._birthDate.getFullYear();
    } else {
      return today.getFullYear() - this._birthDate.getFullYear() + 1;
    }
  }

  get celsius(): number {
    return this._celsius;
  }

  get farenheit(): number {
    return this._celsius * 1.8 + 32;
  }

  set lastName(newName: string) {
    if (newName.length > 1) {
        this._lastName = newName
    } else {
        throw new Error('Ton nom est trop court fréro/sista/autre')
    }
  }

  /**
   * Augmente le salaire de l'employé de X pourcents
   * @param percent pourcentage de l'augmentation qui doit être positif
   */
  public augmentation(percent: number): void {
    if (percent > 0 && percent <= 100) {
      console.log(
        `Le salaire de ${this._firstName} ${this._lastName} va être augmenté de ${percent}. Valeure actuelle : ${this._salary}`
      );

      const augmentation = (this._salary * percent) / 100;

      console.log(`Il sera augmenté de ${augmentation}€`);

      this._salary += augmentation;

      console.log(`Son nouveau salaire est : ${this._salary} €`);
    } else {
      throw new Error("Le pourcentage est incorrect");
    }
  }
}

const employee = new Employee(
  "Halliday",
  "Johnny",
  1000,
  new Date("1943/06/15"),
  25
);

console.log(employee.age);
console.log(employee.farenheit);
