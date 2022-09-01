import Stagiaire from "./classes/Stagiaire";
import Cdd from "./classes/Cdd";
import Cdi from "./classes/Cdi";
import Collaborateur from "./interfaces/Collaborateur";
import Remunere from "./interfaces/Remunere";
import DureeLimite from "./interfaces/DureeLimite";

const constantin: Stagiaire = new Stagiaire(
  "Mouchard",
  "Con Stantin",
  new Date("01/09/2022")
);
const remi: Cdd = new Cdd("Ponche", "Remi", new Date("01/09/2022"), 3);
const alex: Cdi = new Cdi("Devos", "Alexandre", 10000);

const collaborateurs: DureeLimite[] = [ remi, constantin];

collaborateurs.forEach((collaborateur) => {
  console.log(collaborateur.travailler());
  console.log(collaborateur.prolonger(-1000000))
});
// Est équivalent à :
// for (let collaborateur of collaborateurs) {
//   console.log(collaborateur.travailler());
// }
