export class Joc{
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;    
    descripcio?: string;


    constructor(id : number, nom: string, preu: number, disponible: boolean, descripcio?: string) {
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.disponible = disponible;
        this.descripcio = descripcio;
    }
    getNom(): string {
        return this.nom;
    }
    getPreu(nom: string): number {
        return this.preu;
    }
    getDisponible(nom: string): boolean {
        return this.disponible;
    }
}