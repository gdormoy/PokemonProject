import {Combat} from "./../main/models/Combat";
import {Pokemon} from "./../main/models/Pokemon";
import {Competence} from ".//../main/models/Competence"


describe('Test Pokemon.ts', () => {

    const pika: Pokemon = new Pokemon("pikachu", 10, 20, 50, 40, 30, 60, 40, [new Competence("eclair", "special", 30, "electrique")]);
    const draco: Pokemon = new Pokemon("dracofeu", 100, 20, 80, 40, 30, 60, 40, [new Competence("deflagration", "special", 120, "feu")]);
    const salameche: Pokemon = new Pokemon("salameche", 10, 20, 30, 40, 30, 60, 40, [new Competence("flammeche", "special", 30, "feu")]);

    test('should pick draco', () => {
        expect(Combat.PremierAttaquant(pika, draco)).toBe(draco);
    })
    test('should pick pika', () => {
        expect(Combat.PremierAttaquant(pika, salameche)).toBe(pika);
    })
});