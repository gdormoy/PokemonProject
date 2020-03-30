import {Combat} from "./../main/models/Combat";
import {Pokemon} from "./../main/models/Pokemon";
import {Competence} from ".//../main/models/Competence"


describe('Test Pokemon.ts', () => {

    const pika: Pokemon = new Pokemon("pikachu", 10, "electrique", 60, 20, 50, 40, 30, 60, 40, [new Competence("eclair", "special", 30, "electrique", 100, 20)]);
    const grolem: Pokemon = new Pokemon("grolem", 30, "sol/roche", 100, 20, 30, 40, 30, 60, 40, [new Competence("seisme", "physique", 120, "sol", 80, 5)]);
    const draco: Pokemon = new Pokemon("dracofeu", 36, "feu/vol", 100, 20, 80, 40, 30, 60, 40, [new Competence("deflagration", "special", 120, "feu", 90, 5)]);
    const salameche: Pokemon = new Pokemon("salameche", 10, "feu", 60, 20, 30, 40, 30, 60, 40, [new Competence("flammeche", "special", 30, "feu", 100, 20)]);

    test('should pick draco', () => {
        expect(Combat.PremierAttaquant(pika, draco)).toBe(draco);
    })
    test('should pick pika', () => {
        expect(Combat.PremierAttaquant(pika, salameche)).toBe(pika);
    })

    // test('Should grolem received damage', () => {
    //     pika.attaquePokemon(grolem, pika.competences[0])
    //     expect(grolem.pv).toBe(100);
    // })

    test('draco should not take damage', () => {
        grolem.attaquePokemon(draco, grolem.competences[0])
        expect(draco.pv).toBe(100);
    })
    //
    test('pika should get minus 60hp', () => {
        grolem.attaquePokemon(pika, grolem.competences[0])
        expect(pika.pv).toBe(13.2);
    })
});