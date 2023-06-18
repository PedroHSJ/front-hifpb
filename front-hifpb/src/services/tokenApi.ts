import { AxiosResponse } from 'axios';
import { IToken } from '../interfaces/IToken';
import { api } from '.';

async function getToken(userId: string): Promise<IToken> {
	const response = await api.get<unknown, AxiosResponse<IToken>>(
		`/token/${userId}`,
	);
	return response.data;
}

async function getTokenPlayground(userId: string): Promise<IToken> {
	const response = await api.get<unknown, AxiosResponse<IToken>>(
		`/token/tokenPlayground/${userId}`,
	);
	return response.data;
}

export default {
	getToken,
	getTokenPlayground,
};
