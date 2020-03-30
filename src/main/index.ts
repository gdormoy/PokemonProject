import {Pokemon} from "./models/Pokemon";
import {Competence} from "./models/Competence";
import {Combat} from "./models/Combat";

let DracaufeuComp = Competence[4];
let RoueDeFeu = new Competence("Roue de feu", "special", 65, "feu", 90, 10);
let Deflagration = new Competence("Deflagration", "special", 120, "feu", 80, 5);
let QueueDeFer = new Competence("Queue de fer", "physique", 40, "acier", 90, 15);
let Souplesse = new Competence("Souplesse", "physique", 60, "normal", 90, 20);

DracaufeuComp.push(RoueDeFeu);
DracaufeuComp.push(Deflagration);
DracaufeuComp.push(QueueDeFer);
DracaufeuComp.push(Souplesse);

let Dracaufeu = new Pokemon("Dracaufeu", 70, "feu/vol", 200, 50, 40, 60,
    50, 80, 50, DracaufeuComp)

let GrolemComp = Competence[4]
let Seisme = new Competence("Seisme", "physique", 120, "sol", 90, 5);
let Roulade = new Competence("Roulade", "physique", 50, "normal", 100, 15);
let TombeRoche = new Competence("Tombe roche", "physique", 60, "roche", 90, 15);
let Plaquage = new Competence("Plaquage", "physique", 60, "normal", 90, 15);

GrolemComp.push(Seisme);
GrolemComp.push(Roulade);
GrolemComp.push(TombeRoche);
GrolemComp.push(Plaquage);

let Grolem = new Pokemon("Grolem", 70, "sol/roche", 400, 50, 30, 80,
    80, 40, 30, GrolemComp)
