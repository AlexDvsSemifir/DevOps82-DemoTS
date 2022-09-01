export default interface Collaborateur {
    _nom: string;
    _prenom: string;
    /**
     * Indique ce que fait le collaborateur
     */
    travailler(): string;
  }