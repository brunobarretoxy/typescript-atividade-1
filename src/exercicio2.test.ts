import { concatenarPalavras } from './exercicio2.js';

test('concatena as strings separadas por espaço', () => {
  expect(concatenarPalavras(['Arrays', 'com', 'TypeScript'])).toBe(
    'Arrays com TypeScript',
  );
});