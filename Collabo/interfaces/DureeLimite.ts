import Collaborateur from "./Collaborateur";

export default interface DureeLimite extends Collaborateur {
  _debutContrat: Date;
  _finContrat: Date;
  prolonger(jours: number): void;
}
