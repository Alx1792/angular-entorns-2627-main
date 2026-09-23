import { Joc } from "./interfaces/joc";
export class Llista{
    nom: string;
    jocs: Joc[]

    constructor(nom : string, jocs : Joc[]){
        this.nom = nom;
        this.jocs = jocs;
    }
    esDisponible(joc:Joc): boolean{
        return joc.disponible;
    }
    getNomJ(joc:Joc): string { //metode, no getter
        return joc.nom;
    }//diferent getNom que el de abaix que si es un getter
    get TotalJocs() : number { //un getter no te parametres
        return this.jocs.length;
    }
    
}