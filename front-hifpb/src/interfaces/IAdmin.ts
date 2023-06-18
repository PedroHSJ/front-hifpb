import { IBaseInterface } from './IBaseInterface';

export interface IAdmin extends IBaseInterface {
	nome: string;
	cpf: string;
	telefone: string;
	endereco: any;
	email: string;
	perfil: any;
	status: any;
	senha?: string;
}
