//UNa interficie defineix la forma d'un objecte, es a dir, quines propietats i mètodes ha de tenir. En aquest cas, l'interficie Producte defineix un producte amb les propietats id, nom, preu i descripcio.
//Qualsevol objecte que implemneti aquesta interficie ha de terni les propietats i metodes en ella.
console.log("ESTIC A INTERFICIE PRODUCTE");

export interface Producte {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    descripcio?: string;
}
