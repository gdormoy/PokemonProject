import competence from './Competence.js'
class Pokemon {
    constructor(nom = null, pv= 10, attaque = 10, defense = 10, vitesse,
                attaqueSpe = 10, defenseSpe = 10, compétences = [competence('charge', 'physique', 10)]) {
        this.nom = nom
        this.pv = pv
        this.attaque = attaque
        this.defense = defense
        this.vitesse = vitesse
        this.attaqueSpe = attaqueSpe
        this.defenseSpe = defenseSpe
        this.competences = compétences
    }
}