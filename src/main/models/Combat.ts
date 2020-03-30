import {Pokemon} from "./Pokemon";
import {Competence} from "./Competence";
import {getRandInt} from "../Utils";

export class Combat {

    static tour

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

    static Simulation(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            let premier;
            let second;
            Combat.tour = setInterval(() => {
                console.log("Round start");
                if (Combat.PremierAttaquant(pokemon1, pokemon2) == pokemon1) {
                    premier = pokemon1;
                    second = pokemon2;
                } else {
                    premier = pokemon2;
                    second = pokemon1;
                }

                console.log(`${premier.nom} commence`);
                premier.attaquePokemon(second, premier.competences[getRandInt(4)]);
                if (second.pv <= 0) {
                    resolve(premier);
                    clearInterval(Combat.tour);
                    return;
                }

                second.attaquePokemon(premier, second.competences[getRandInt(4)]);
                if (premier.pv <= 0) {
                    resolve(second);
                    clearInterval(Combat.tour);
                    return;
                }
            }, 1 ,pokemon1, pokemon2);
        });
    }
}
