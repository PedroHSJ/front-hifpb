import { IBaseInterface } from './IBaseInterface';

export interface IClient extends IBaseInterface {
	razaoSocial: string;
	cnpj: string;
	cpfResponsavel: string;
	nomeResponsavel: string;
	inscricaoEstadual: string;
	email: string;
	status: number | string;
}
