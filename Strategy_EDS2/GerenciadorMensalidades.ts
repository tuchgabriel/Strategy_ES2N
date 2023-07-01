import { Aluno } from "./Aluno";
import { Mensalidade, AtrasadoStrategy, PagoStrategy, EmAbertoStrategy } from "./Mensalidade";
import { StatusPagamentoStrategy } from "./Mensalidade";

export class GerenciadorMensalidades {
    alunos: Aluno[];
    mensalidades: Map<Aluno, Mensalidade[]>;

    constructor() {
        this.alunos = [];
        this.mensalidades = new Map();
    }

    criarAluno(): Aluno {
        const aluno = Aluno.criarNovoAluno();
        this.alunos.push(aluno);
        this.criarMensalidades(aluno);
        return aluno;
    }

    criarMensalidades(aluno: Aluno): void {
        const mensalidadesAluno: Mensalidade[] = [];

        for (let i = 0; i < 3; i++) {
            const dataVencimento = new Date();
            dataVencimento.setMonth(dataVencimento.getMonth() + i);

            const mensalidade = new Mensalidade(
                aluno,
                600,
                dataVencimento.toLocaleDateString(),
                "",
                aluno.nome
            );

            // Crie uma instância da estratégia adequada com base na lógica desejada
            let strategy: StatusPagamentoStrategy;

            if (i === 0) {
                strategy = new AtrasadoStrategy();
            } else if (i === 1) {
                strategy = new PagoStrategy();
            } else {
                strategy = new EmAbertoStrategy();
            }

            mensalidade.setStatusPagamento(strategy);
            mensalidadesAluno.push(mensalidade);
        }

        this.mensalidades.set(aluno, mensalidadesAluno);
    }

    exibirMensalidades(aluno: Aluno): void {
        const mensalidadesAluno = this.mensalidades.get(aluno);

        if (!mensalidadesAluno) {
            console.log("Não há mensalidades para exibir para este aluno.");
            return;
        }

        for (const mensalidade of mensalidadesAluno) {
            console.log(`Aluno: ${mensalidade.nomeAluno}`);
            console.log(`Data de Vencimento: ${mensalidade.dataVencimento}`);
            console.log(`Status do Pagamento: ${mensalidade.statusPagamento}`);
            console.log(`Valor: ${mensalidade.valor}`);
            console.log("--------------------------------------");
        }
    }
}
