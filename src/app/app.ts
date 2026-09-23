import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';
import { Joc } from './interfaces/joc';
import { Alumne } from './alumne';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
  // DIFERENCIA ENTRE JS I TS: JS NO TE TIPOS, TS ES UN SUPERCONJUNT DE JS, PER AIXO TOT EL QUE ES JS ES VALID EN TS
  //ELS TIPUS NO VANCIENT COM FUNCIONA EL CODI -> AJUDEN A DETECTAR ERRORS ABANS DE COMPILAR, TS ES UN LLENGUATGE TIPAT, JS NO
  //"UNDEFINED IS NOT A FUNCTION" -> AIXO ES EL QUE VOLEM EVITAR !!!!

  /*function saluda(nom){
  return nom.toUpperCase();
  }*/
  /*saluda(40)--> Parameter 'nom' implicitly has an 'any' type*/

  /*function saluda(nom: string){
  return nom.toUpperCase();
  }*/
  /*saluda(40)--> Argument of type 'number' is not assignable to parameter of type 'string'*/

  //TIPUS BASICS
  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  //ARRAYS TIPATS
  colors: string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  //TypeScripts interfereix (adivina) el tipus automàticament
  ciutat = 'Lleida'; //string
  codiP = 25605; //number

  //objecte de tipus Producte
  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true,
    descripcio: 'Aquest es el producte numero 1',
  };
  producte2: Producte = {
    id: 2,
    nom: 'Portatil',
    preu: 1299,
    disponible: false,
    descripcio: 'Aquest es el producte numero 2',
  };
  productes: Producte[] = [this.producte, this.producte2];
  /*productes: Producte[] = [
    {
      id: 1,
      nom: 'PC',
      preu: 999,
      disponible: true,
      descripcio: 'Aquest es el producte numero 1'
    },
    {
      id: 2,
      nom: 'Portatil',
      preu: 1299,
      disponible: false,
      descripcio: 'Aquest es el producte numero 2'
    }
  ];*/
  p1 = new ProducteClass('PC', 999);

  joc1: Joc = { id: 1, nom: 'Minecraft', preu: 29.99, disponible: true };
  joc2: Joc = {
    id: 2,
    nom: 'Call of Duty',
    preu: 39.99,
    disponible: false,
    descripcio: 'Joc de guerra en primera persona',
  };
  joc3: Joc = { id: 3, nom: 'FIFA 23', preu: 59.99, disponible: true, descripcio: 'Joc de futbol' };
  joc4: Joc = {
    id: 4,
    nom: 'The Witcher 3',
    preu: 49.99,
    disponible: true,
    descripcio: 'Joc de rol i acció',
  };
  joc5: Joc = { id: 5, nom: 'Cyberpunk 2077', preu: 59.99, disponible: false };
  jocs: Joc[] = [this.joc1, this.joc2, this.joc3, this.joc4, this.joc5];

  getActius(): Joc[] {
    return this.jocs.filter((joc) => joc.disponible === true); //Filtra els resultats per qui la vairable disponible sigui true
    //Filter recore un array i fa un nou amb els elements que tenen esa condicio, foreach+if
  }
  findById(id: number): Joc | undefined {
    return this.jocs.find((joc) => joc.id === id); //Com un foreach, busca dintre de l'array de jocs, el joc amb el id que busco
    //True o false
  }
  formatarElement(joc: Joc): string {
    return `Nom: ${joc.nom}, Preu: ${joc.preu}€, Disponible: ${joc.disponible ? 'Sí' : 'No'}, Descripció: ${joc.descripcio ?? 'No disponible'}`;
  }

  alumne1 = new Alumne('Aleix', 19, 'DAW', [9, 2, 3, 10]);
  alumne2 = new Alumne('Pedrito', 34, 'ESPORTS', [2, 5, 7, 9]);
  constructor() {
    console.log(this.p1.toString());
    console.log(this.p1.getpreuAmbIva());
    console.log(this.alumne1.presentar());
    console.log(this.alumne1.haAprobat);
    console.log(this.alumne2.presentar());
    console.log(this.alumne2.haAprobat);
  }
}
