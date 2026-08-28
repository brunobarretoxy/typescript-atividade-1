export interface Descritivel {
  gerarDescricao(): string;
}

export class Livro implements Descritivel {
  constructor(public titulo: string, public quantidadePaginas: number) {}

  gerarDescricao(): string {
    return `${this.titulo} possui ${this.quantidadePaginas} páginas.`;
  }
}

export class Filme implements Descritivel {
  constructor(public titulo: string, public duracaoMinutos: number) {}

  gerarDescricao(): string {
    return `${this.titulo} dura ${this.duracaoMinutos} minutos.`;
  }
}