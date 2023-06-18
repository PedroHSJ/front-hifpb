import { IBaseInterface } from './IBaseInterface';

export interface ILog extends IBaseInterface {
	token: string;
	endPoint: string;
	clienteId: string;
	dataAcesso: Date | string;
}
