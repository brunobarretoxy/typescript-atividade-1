export function quadradosComFor(numeros: number[]): number[] {
  const quadrados: number[] = [];

  for (let indice = 0; indice < numeros.length; indice++) {
    quadrados.push(numeros[indice] ** 2);
  }

  return quadrados;
}

export function quadradosComForEach(numeros: number[]): number[] {
  const quadrados: number[] = [];

  numeros.forEach((numero) => {
    quadrados.push(numero ** 2);
  });

  return quadrados;
}