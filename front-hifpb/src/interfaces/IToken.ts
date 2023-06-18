import { IBaseInterface } from './IBaseInterface';

export interface IToken extends IBaseInterface {
	chave: string;
	dataValidade: Date | string;
	clientId: string;
	qtdRequisicaoUtilizada: number;
	qtdRequisicaoContratada: number;
	ativo: boolean;
}
