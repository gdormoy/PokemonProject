import {Competence} from "./Competence"

export class Pokemon {
    constructor(private _nom: string, private _pv: number, private _precision: number, private _vitess: number, private _attaque: number,
                private _defense: number, private _attaqueSpe: number, private _defenseSpe: number,
                private _competences: [Competence]) {
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get pv(): number {
        return this._pv;
    }

    set pv(value: number) {
        this._pv = value;
    }

    get vitess(): number {
        return this._vitess;
    }

    set vitess(value: number) {
        this._vitess = value;
    }

    get attaque(): number {
        return this._attaque;
    }

    set attaque(value: number) {
        this._attaque = value;
    }

    get defense(): number {
        return this._defense;
    }

    set defense(value: number) {
        this._defense = value;
    }

    get attaqueSpe(): number {
        return this._attaqueSpe;
    }

    set attaqueSpe(value: number) {
        this._attaqueSpe = value;
    }

    get defenseSpe(): number {
        return this._defenseSpe;
    }

    set defenseSpe(value: number) {
        this._defenseSpe = value;
    }

    get precision(): number {
        return this._precision;
    }

    set precision(value: number) {
        this._precision = value;
    }

    get competences(): [Competence] {
        return this._competences;
    }

    set competences(value: [Competence]) {
        this._competences = value;
    }
}



function attaque() {

}