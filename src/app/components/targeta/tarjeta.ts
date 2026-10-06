//Aquest fitxer conte la logica de la targeta, es a dir, el codi que fa que la targeta funcioni. Aquest fitxer es un component de Angular, i per tant, es una classe que conte les propietats i metodes que fan que la targeta funcioni. Aquesta classe es exportada per poder ser utilitzada en altres parts de l'aplicacio.
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta', /* Per usar-lo a l'HTML d'altres components, com una etiqueta HMTL personalitzada*/ 
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String= 'Ordinador Protatil';
  preu: number= 1299;
  estoc: number= 2;
  producte: Producte = {
    id: 1,
    nom: 'Ordinador Protatil',
    preu: 1299,
    estoc: 0,
    categoria : 'Electronics'
  };
 /* Getter --> es un tipus especial de propietat calculada. En lloc de guardar un valor, calcula el valor cada vegada que es crida. Es una funcio que es crida com una propietat. La sintaxi es la seguent:
  get nomDelGetter(): TIpusRetorn
  return calcul;
  */

  /* INTERPOLACIÓ DE DADES 
Permet connectar les dades del TS a l'html
Permet incrustar expressions TS dins de l'HTML, angular avalua l'expressio i mostra el reseultat com a text.

{{nomPropietat}} -> mostra el valor de la propietat de la classe
{{2+3}} -> mostra el resultat de l'expressio, 5
{{text.toUpperCase()}} -> mostra el resultat de la funcio, en majuscules
{{ edat > 18 ? 'Major d edat' : 'Menor d edat' }} -> operador ternari
amb {{nom}} --> el valor pot canviar i l'html s'actualitzara automaticament, hardcodes es x sempre es estatic
 Al template s'usa com una propietat, sense parentesis {{nomDElGetter}}.
*/

//Getter1: preu amb IVA del 21%
 get preuAmbIva(): number {
  return this.producte.preu * 1.21;
 }
//Getter2: estat de disponibilitat en text
get estatDisponibilitat(): string {
  if (this.producte.estoc === 0) {
    return 'Esgotat';
}
else if (this.producte.estoc<5){
  return 'Poques unitats';  
}
return 'Disponible';

}


}
