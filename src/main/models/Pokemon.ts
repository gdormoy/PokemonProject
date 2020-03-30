import {Competence} from "./Competence"
import {getRandInt} from "../Utils";

export class Pokemon {
    nom: string;
    element: string
    vitesse: number;
    attaque: number;
    attaqueSpe: number
    pv: number;
    precision: number;
    niveau: number;
    defense: number;
    defenseSpe: number;
    critique: number;
    competences: Competence[];

    constructor(nom: string, niveau: number, element: string, pv: number, precision: number, vitesse: number, attaque: number,
                defense: number, attaqueSpe: number, defenseSpe: number,
                competences: Competence[]) {
        this.nom = nom;
        this.niveau = niveau;
        this.element = element;
        this.pv = pv;
        this.precision = precision;
        this.vitesse = vitesse;
        this.attaque = attaque
        this.attaqueSpe = attaqueSpe;
        this.defense = defense;
        this.defenseSpe = defenseSpe;
        this.competences = competences;
        this.critique = vitesse / 2;
    }

    attaquePokemon(defenseur: Pokemon, competence: Competence): void {
        if (competence.pp > 0) {
            if (competence.typeCompetence == "special") {
                if (competence.element == "sol" && defenseur.element.includes("vol")) {
                    console.log("Cette attaque n'affecte pas ce pokemon")
                } else {
                    const damage = Math.floor(Math.floor(Math.floor(2 * this.niveau / 5 + 2) * this.attaqueSpe * competence.puissance / defenseur.defenseSpe) / 50) + 2
                    if (damage > defenseur.pv) {
                        defenseur.pv = 0
                        console.log(`t'es mort ${defenseur.nom}`)
                    } else {
                        console.log(defenseur.pv - damage)
                        defenseur.pv -= damage
                    }
                }
            } else if (competence.typeCompetence == "physique") {
                if (competence.element == "sol" && defenseur.element.includes("vol")) {
                    console.log("cette attaque n'affecte pas ce pokemon")
                } else {
                    const damage = Math.floor(Math.floor(Math.floor(2 * this.niveau / 5 + 2) * this.attaque * competence.puissance / defenseur.defense) / 50) + 2
                    if (damage > defenseur.pv) {
                        defenseur.pv = 0
                        console.log(`t'es mort ${defenseur.nom}`)
                    } else {
                        console.log(damage)
                        defenseur.pv -= damage
                    }
                }
            } else {
                console.log("Est-ce vraiment une attaque ?")
            }
            competence.pp -= 1
        }
    }

    checkHit(competence: Competence): boolean{
        let acc = getRandInt(competence.precision) + this.precision;
        return acc > 80;
    }
}



