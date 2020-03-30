import {Pokemon} from "./Pokemon";
import {Competence} from "./Competence";

export class Combat {


    static PremierAttaquant(pokemon1: Pokemon, pokemon2: Pokemon){
        if (pokemon1.vitesse > pokemon2.vitesse){
            return pokemon1
        } else if (pokemon1.vitesse < pokemon2.vitesse){
            return pokemon2
        } else {
            let premier = Math.floor(Math.random() * 1) + 1
            if (premier === 0 ) {
                return pokemon1
            } else {
                return pokemon2
            }
        }
    }
}
