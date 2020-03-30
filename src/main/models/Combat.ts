import {Pokemon} from "./Pokemon";

export class Combat {


    static PremierAttaquant(pokemon1: Pokemon, pokemon2: Pokemon){
        if (pokemon1.vitess > pokemon2.vitess){
            return pokemon1
        } else if (pokemon1.vitess < pokemon2.vitess){
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
