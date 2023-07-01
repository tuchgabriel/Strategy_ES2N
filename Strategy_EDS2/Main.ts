import prompt from "prompt-sync";
import { Aluno } from "./Aluno";
import { GerenciadorMensalidades } from "./GerenciadorMensalidades";
import { Notas } from "./Notas";

const teclado = prompt();
const alunos: Aluno[] = [];

const gerenciador = new GerenciadorMensalidades();

let opcao = 0;
while (opcao !== 5) {
    console.log('-------------------------');
    console.log('1. Criar novo aluno');
    console.log('2. Exibir alunos');
    console.log('3. Gerar mensalidades');
    console.log('4. Notas dos Alunos');
    console.log('5. sair');

    opcao = +teclado('Escolha a opção: ');
    console.log('-------------------------');


    switch (opcao) {
        case 1:
            const novoAluno = gerenciador.criarAluno();
            alunos.push(novoAluno);
            break;
        case 2:
            Aluno.exibirAlunos();
            break;
        case 3:
            for (const aluno of alunos) {
                gerenciador.criarMensalidades(aluno);
                gerenciador.exibirMensalidades(aluno);
            }
            break;
        case 4:
            for (const aluno of alunos) {
                const notasAluno = new Notas(aluno, 0);
                notasAluno.gerarNotaRandomizada();
                console.log(`Nota do Aluno ${aluno.nome}: ${notasAluno.nota}`);
            }
            break;
        case 5:
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}
