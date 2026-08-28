import { quadradosComFor, quadradosComForEach } from './exercicio1.js';

const numeros = [3, 5, 7, 3, 8, 9, 1];
const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

test('eleva os elementos ao quadrado usando for', () => {
  expect(quadradosComFor(numeros)).toEqual(resultadoEsperado);
});

test('eleva os elementos ao quadrado usando forEach', () => {
  expect(quadradosComForEach(numeros)).toEqual(resultadoEsperado);
});