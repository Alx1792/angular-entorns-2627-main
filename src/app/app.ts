import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';
import { Joc } from './interfaces/joc';
import { Joc as JocClass } from './joc';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
  colors : string[]= ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts : number[] = [10, 15, 20];

  //TypeScripts interfereix (adivina) el tipus automàticament
  ciutat = 'Lleida'; //string
  codiP= 25605 //number

  //objecte de tipus Producte
  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true,
    descripcio: 'Aquest es el producte numero 1'
  };
   producte2: Producte = {
    id: 2,
    nom: 'Portatil',
    preu: 1299,
    disponible: false,
    descripcio: 'Aquest es el producte numero 2'
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
  constructor() {
    console.log(this.p1.toString());
    console.log(this.p1.getpreuAmbIva());
  }
  joc1 = new JocClass(1, 'Minecraft', 29.99, true);
  joc2 = new JocClass(2, 'Call of Duty', 39.99, false, 'Joc de guerra en primera persona');
  joc3 = new JocClass(3, 'FIFA 23', 59.99, true, 'Joc de futbol');
  joc4 = new JocClass(4, 'The Witcher 3', 49.99, true, 'Joc de rol i acció');
  joc5 = new JocClass(5, 'Cyberpunk 2077', 59.99, false, 'Joc de rol i acció en un món futurista');
  jocs: JocClass[] = [this.joc1, this.joc2, this.joc3, this.joc4, this.joc5];

  getActius(): boolean {
    return true;
  }
  findById(id: number): JocClass | undefined {
    return this.jocs.find(joc => joc.id === id);
  }
  formatarElement(joc: JocClass   ): string {
    return `Nom: ${joc.nom}, Preu: ${joc.preu}€, Disponible: ${joc.disponible ? 'Sí' : 'No'}, Descripció: ${joc.descripcio ?? 'No disponible'}`;
  }

}
