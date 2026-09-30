//Aquest fitxer conte la logica de la targeta, es a dir, el codi que fa que la targeta funcioni. Aquest fitxer es un component de Angular, i per tant, es una classe que conte les propietats i metodes que fan que la targeta funcioni. Aquesta classe es exportada per poder ser utilitzada en altres parts de l'aplicacio.
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta', /* Per usar-lo a l'HTML d'altres components, com una etiqueta HMTL personalitzada*/ 
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {}
