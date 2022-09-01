import Collaborateur from "./Collaborateur";

export default interface Remunere extends Collaborateur {
  _salaire: number;
  /**
   * Augmete le salaure d'un collaborateur
   * @param pourcentage pourcentage de l'augmentation
   */
  augmentation(pourcentage: number): void;
}
