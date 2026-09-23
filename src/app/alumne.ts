export class Alumne {
  nom: string;
  edat: number;
  cicle: string;
  notes: number[];

  constructor(nom: string, edat: number, cicle: string, notes: number[]) {
    this.nom = nom;
    this.edat = edat;
    this.cicle = cicle;
    this.notes = notes;
  }
  presentar(): string {
    return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
  }
  get mitjanaNotes(): number {
    let recompte: number = 0;
    for (let nota of this.notes) {
      recompte += nota;
    }
    let mitjana = recompte / this.notes.length;
    return mitjana;
  }

  get haAprobat(): boolean{
    return this.mitjanaNotes >= 5;
  }
}
