export function filtrarNumerosPares(numeros: number[]): number[] {
  return numeros.filter((numero) => numero % 2 === 0);
}