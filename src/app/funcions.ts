export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}
export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}
export function sumarArray(numeros: number[]): number {
  let suma: number = 0;
  for (let num of numeros) {
    suma += num;
  }
  return suma;
}
