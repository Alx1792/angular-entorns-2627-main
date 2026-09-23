//Primera classe
console.log("ESTIC A PRODUCTE.TS");
export class Producte {
    nom: string;
    preu: number;
    
    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    //mètode normal
    toString(): string {
        return `Nom: ${this.nom}, Preu: ${this.preu}€`;
    }           
    //getters i setters
    getpreuAmbIva(): number {
        return this.preu * 1.21;
    }
}   