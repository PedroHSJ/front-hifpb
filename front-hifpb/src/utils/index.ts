import { AxiosError } from 'axios';
import jwt from 'jwt-decode';
import { userStatus } from '../constants/enums';

export function toCaptalize(text?: string, treatmentPronoun?: string): string {
	if (!text) return '';
	const words = text.toLowerCase().split(' ');
	const phrase = words
		.map(word =>
			word.length == 2
				? word
				: word.charAt(0).toUpperCase() + word.slice(1),
		)
		.join(' ');
	return `${treatmentPronoun ?? ''} ${phrase}`.trim();
}

export function toLowerCase(text: string) {
	return text.toLowerCase().trim();
}

export function removeMask(text: string) {
	return text.replace(/[^0-9]/g, '').trim();
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('pt-br').format(new Date(date));
}

export function formatHours(date?: Date | string): string {
	return '';
}

export function relativeDate(date?: Date | string) {
	const today = new Date();
	const dateEntered = new Date(date as string);
	var differenceInMilliseconds = +dateEntered - +today;
	const differenceInDays = differenceInMilliseconds / 86400000;
	if (differenceInDays <= 0 && differenceInDays > -0.6) return 'Hoje';
	return new Intl.RelativeTimeFormat('pt-br').format(
		+differenceInDays.toFixed(0),
		'day',
	);
}

export function putCPFMask(cpf: string | undefined): string {
	if (typeof cpf === 'undefined') return '';
	return cpf
		.replace(/(\D)/, '')
		.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.•••.•••-$4');
}

export function putCNPJMask(cnpj: string | undefined): string {
	if (typeof cnpj === 'undefined') return '';
	var formatedCnpj = cnpj.replace(/[^\d]/g, '');
	return formatedCnpj.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
		'$1.•••.•••/$4-$5',
	);
}

export function putTokenMask(token: string) {
	return `${token.substring(0, 5)}•••`;
}

export function putCelPhoneMask(celphone: string | undefined): string {
	if (!celphone) return '';
	return celphone
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})/, '•••••-')
		.replace(/(\d{4})/, '$1');
}

export function getRole(): 'Administrador' | 'Cliente' {
	const token = localStorage.getItem('@token');
	if (!token) return 'Cliente';
	const jwtToken = jwt<any>(token!);
	return jwtToken[
		'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
	];
}

export function getUserStatus(
	type: 'key' | 'label',
	value: string | number | undefined,
) {
	if (!value) return;
	if (type === 'label') return userStatus[+value!].label;
	if (type === 'key')
		return userStatus.find(status => status.label == value)?.key;
}

export function handleErrorMessage(error: any) {
	if (!error) return '';
	const axiosResponseError = (error as AxiosError).message;
	const apiResponseError = (error as AxiosError).response?.data;
	const validationsErrors = (error as any).response?.data?.errors ?? {};
	if (axiosResponseError?.toLowerCase().includes('network'))
		return 'Serviço indisponível';
	if (axiosResponseError?.toLowerCase().includes('404'))
		return 'Serviço não encontrado';
	if (Object.keys(validationsErrors).length) {
		var errors = '';
		for (error of Object.keys(validationsErrors)) {
			errors += validationsErrors[error] + ' ';
		}
		return errors.trim();
	}
	return apiResponseError as string;
}

export function isValidCPF(cpf: string | undefined): boolean {
	if (typeof cpf !== 'string') return false;
	var cpfValid = cpf.replace(/[\s.-]*/gim, '');
	if (
		cpfValid.length !== 11 ||
		!Array.from(cpfValid).filter(e => e !== cpfValid[0]).length
	) {
		return false;
	}
	let soma = 0;
	let resto;
	for (let i = 1; i <= 9; i++)
		soma += parseInt(cpfValid.substring(i - 1, i)) * (11 - i);
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) resto = 0;
	if (resto !== parseInt(cpfValid.substring(9, 10))) return false;
	soma = 0;
	for (let i = 1; i <= 10; i++)
		soma += parseInt(cpfValid.substring(i - 1, i)) * (12 - i);
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) resto = 0;
	if (resto !== parseInt(cpfValid.substring(10, 11))) return false;
	return true;
}

export function isValidCNPJ(cnpj: string | undefined) {
	var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	var c: any = String(cnpj).replace(/[^\d]/g, '');

	if (c.length !== 14) return false;

	if (/0{14}/.test(c)) return false;

	for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
	if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

	for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
	if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

	return true;
}

export function isValidNumber(value: any) {
	if (!value) return true;
	const num = Number(value);
	return !isNaN(num) && num >= 0 && num < 1e7;
}

export function isValidName(name: string | undefined): boolean {
	const myReg =
		/^[a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?([a-zA-ZÀ-Ÿ][a-zà-ÿ']+\s)?[a-zA-ZÀ-Ÿ][a-zà-ÿ']+$/;
	if (!name || name == '') return false;
	const response = myReg.test(name);
	return response;
}
