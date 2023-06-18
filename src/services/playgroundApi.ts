import { AxiosResponse } from 'axios';
import { api } from '.';
import { ICardioApi } from '../interfaces/ICardioApi';
import { ICardioResult } from '../interfaces/ICardioResult';

async function cardio(cardioForm: ICardioApi): Promise<ICardioResult[]> {
	const response = await api.post<unknown, AxiosResponse<ICardioResult[]>>(
		`/playground/cardio`,
		cardioForm,
	);
	return response.data;
}

export default {
	cardio,
};
