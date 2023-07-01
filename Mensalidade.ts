import { Aluno } from "./Aluno";

// Interface para a estratégia de status de pagamento
export interface StatusPagamentoStrategy {
  getStatus(mensalidade: Mensalidade): void;
}

// Implementação da estratégia "Atrasado"
export class AtrasadoStrategy implements StatusPagamentoStrategy {
  getStatus(mensalidade: Mensalidade): void {
    mensalidade.statusPagamento = "Atrasado";
  }
}

// Implementação da estratégia "Pago"
export class PagoStrategy implements StatusPagamentoStrategy {
  getStatus(mensalidade: Mensalidade): void {
    mensalidade.statusPagamento = "Pago";
  }
}

// Implementação da estratégia "Em aberto"
export class EmAbertoStrategy implements StatusPagamentoStrategy {
  getStatus(mensalidade: Mensalidade): void {
    mensalidade.statusPagamento = "Em aberto";
  }
}

export class Mensalidade {
  constructor(
    public aluno: Aluno,
    public valor: number,
    public dataVencimento: string,
    public statusPagamento: string,
    public nomeAluno: string
  ) { }

  // Método para definir o status de pagamento com base na estratégia
  setStatusPagamento(strategy: StatusPagamentoStrategy): void {
    strategy.getStatus(this);
  }
}