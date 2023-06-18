import { useState } from 'react';
import { userApi } from '../services';
import { IClient } from '../interfaces/IClient';
import { removeMask, toCaptalize, toLowerCase } from '../utils';

export const useCreateClient = () => {
	const [error, setError] = useState<string | any>('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState<string | undefined>();

	const createClient = async (client: IClient) => {
		try {
			setError('');
			setIsLoading(true);
			const formatDataForAPI = {
				...client,
				nomeResponsavel: toCaptalize(client.nomeResponsavel),
				cpfResponsavel: removeMask(client.cpfResponsavel),
				email: toLowerCase(client.email),
				razaoSocial: toCaptalize(client.razaoSocial),
				cnpj: removeMask(client.cnpj),
				inscricaoEstadual: removeMask(client.inscricaoEstadual),
			};
			const response = await userApi.createClient(formatDataForAPI);
			setData(response);
			setIsSuccess(true);
		} catch (e) {
			setIsSuccess(false);
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		error,
		isLoading,
		isSuccess,
		data,
		createClient,
	};
};
