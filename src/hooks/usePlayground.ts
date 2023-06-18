import { useState } from 'react';
import { ICardioForm } from '../interfaces/ICardioForm';
import { playgroundApi } from '../services';
import { ICardioApi } from '../interfaces/ICardioApi';
import { useGetTokenPlayground } from './useGetTokenPlayground';
import { IToken } from '../interfaces/IToken';
import { ICardioResult } from '../interfaces/ICardioResult';

export const usePlayground = () => {
	const { data: getTokenPlayground } = useGetTokenPlayground();
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState<ICardioResult>();
	const [error, setError] = useState<unknown>();

	const cardio = async (cardioForm: ICardioForm) => {
		try {
			setIsLoading(true);
			setError('');
			const formated: ICardioApi = {
				chaveApi: (getTokenPlayground as IToken[])[0].chave,
				pacientes: [
					{
						...cardioForm,
						cid: cardioForm.cid.toUpperCase(),
						sexo: cardioForm.sexo.toLocaleLowerCase(),
					},
				],
			};
			const response = await playgroundApi.cardio(formated);
			setResult(response[0]);
		} catch (e) {
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		result,
		error,
		cardio,
	};
};
