import { primeirosDoisElementos } from './exercicio4.js';

test('extrai os dois primeiros elementos', () => {
  expect(primeirosDoisElementos([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});