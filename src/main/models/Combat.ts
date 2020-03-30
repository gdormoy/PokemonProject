import {Pokemon} from "./Pokemon";
import {getRandInt} from "../Utils";

export class Combat {

    static tour
    static combat: Array<String> = [];

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
            let round;
            let damage;
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
                damage = premier.attaquePokemon(second, premier.competences[getRandInt(4)]);
                round = `${premier.nom} attaque ${second.nom} et inflige ${damage}, il reste ${second.pv} à ${second.nom}`
                Combat.combat.push(round)
                if (second.pv <= 0) {
                    console.log(`Victoire de ${premier.nom} il lui reste ${premier.pv} pv`)
                    resolve(premier);
                    clearInterval(Combat.tour);
                    return;
                }

                damage = second.attaquePokemon(premier, second.competences[getRandInt(4)]);
                round = `${second.nom} attaque ${premier.nom} et inflige ${damage}, il reste ${premier.pv} à ${premier.nom}`
                Combat.combat.push(round)
                if (premier.pv <= 0) {
                    console.log(`Victoire de ${second.nom} il lui reste ${second.pv} pv`)
                    resolve(second);
                    clearInterval(Combat.tour);
                    return;
                }
            }, 1 ,pokemon1, pokemon2);
        });
    }
}
