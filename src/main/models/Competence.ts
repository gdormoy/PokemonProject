export class Competence {
    nom: string;
    typeCompetence: string;
    puissance: number;
    element: string;
    precision: number;
    pp: number;

    constructor(nom: string, typeCompetence: string, puissance: number, element: string, precision: number, pp: number) {
        this.nom = nom;
        this.typeCompetence = typeCompetence;
        this.puissance = puissance;
        this.element = element;
        this.precision = precision;
        this.pp = pp;
    }
}