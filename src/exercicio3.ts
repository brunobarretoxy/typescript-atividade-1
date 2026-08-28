export function ordenarDecrescente(palavras: string[]): string[] {
  return [...palavras].sort((primeira, segunda) => segunda.localeCompare(primeira));
}