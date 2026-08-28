import { ordenarDecrescente } from './exercicio3.js';

test('ordena as palavras de forma decrescente', () => {
  expect(ordenarDecrescente(['carro', 'boneco', 'ave', 'lapis'])).toEqual([
    'lapis',
    'carro',
    'boneco',
    'ave',
  ]);
});