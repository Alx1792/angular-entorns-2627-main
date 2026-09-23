import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';
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
}
