import { ICardioForm } from './ICardioForm';

export interface ICardioApi {
	chaveApi: string;
	pacientes: [ICardioForm];
}
