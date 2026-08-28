import { filtrarNumerosPares } from './exercicio5.js';

test('filtra somente os números pares', () => {
  expect(filtrarNumerosPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});