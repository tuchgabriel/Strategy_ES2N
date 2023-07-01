import { Aluno } from "./Aluno";

export class Notas {
  constructor(
    public aluno: Aluno,
    public nota: number
  ) { }

  gerarNotaRandomizada(): void {
    this.nota = Math.floor(Math.random() * 11);
  }
}
