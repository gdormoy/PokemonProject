import {Combat} from "./../main/models/Combat";
import {Pokemon} from "./../main/models/Pokemon";
import {Competence} from ".//../main/models/Competence"


describe('Test Pokemon.ts', () => {


    const Dracaufeu = new Pokemon("Dracaufeu", 70, "feu/vol", 200, 50, 40, 60,
        50, 80, 50, [
            new Competence("Roue de feu", "special", 65, "feu", 90, 10),
            new Competence("Deflagration", "special", 120, "feu", 80, 5),
            new Competence("Queue de fer", "physique", 40, "acier", 90, 15),
            new Competence("Souplesse", "physique", 60, "normal", 90, 20)
        ])

    const Grolem = new Pokemon("Grolem", 70, "sol/roche", 400, 50, 30, 80,
        80, 40, 30, [
            new Competence("Seisme", "physique", 120, "sol", 90, 5),
            new Competence("Roulade", "physique", 50, "normal", 100, 15),
            new Competence("Tombe roche", "physique", 60, "roche", 90, 15),
            new Competence("Plaquage", "physique", 60, "normal", 90, 15)
        ])

    test('Battle should get salamech', async () => {
        expect(await Combat.Simulation(Dracaufeu, Grolem)).toEqual(Grolem);
    });

    test('should pick pikachu', () => {
        expect(Combat.PremierAttaquant(Dracaufeu, Grolem)).toEqual(Dracaufeu);
    });
});