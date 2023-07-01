import prompt from "prompt-sync";


const alunos: Aluno[] = []



export class Aluno {
  constructor(
    public nome: string,
    public idade: number,
    public endereco: string,
  ) { }


  static criarNovoAluno(): Aluno {
    let teclado = prompt();
    const nome = teclado("Nome do aluno: ");
    const idade = +teclado("Idade do aluno: ");
    const endereco = teclado("Endereço do aluno: ");


    const novoAluno = new Aluno(nome, idade, endereco);
    alunos.push(novoAluno);
    console.log("Novo aluno cadastrado:", novoAluno);
    return novoAluno;
  }

  static exibirAlunos(): void {
    console.log("Alunos cadastrados:");
    alunos.forEach((aluno, i) => {
      console.log(`Aluno ${i + 1}:`, aluno);
    });
  }


}

