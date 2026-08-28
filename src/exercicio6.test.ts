import { Filme, Livro } from './exercicio6.js';

test('Livro gera descrição após alterar seus atributos', () => {
  const livro = new Livro('O Pequeno Príncipe', 96);
  livro.quantidadePaginas = 100;

  expect(livro.gerarDescricao()).toBe('O Pequeno Príncipe possui 100 páginas.');
});

test('Filme gera descrição após alterar seus atributos', () => {
  const filme = new Filme('Interestelar', 169);
  filme.duracaoMinutos = 180;

  expect(filme.gerarDescricao()).toBe('Interestelar dura 180 minutos.');
});