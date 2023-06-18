import * as yup from 'yup';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL,
	INVALID_CPF,
	INVALID_CNPJ,
	SHORT_PASS,
	INVALID_NAME,
} from '../constants/messages';
import { isValidCNPJ, isValidCPF, isValidName } from '../utils';

export const ClientSchema = yup.object().shape({
	nomeResponsavel: yup
		.string()
		.test('is-invalid-name', INVALID_NAME, isValidName)
		.required(REQUIRED_FIELD),
	cpfResponsavel: yup
		.string()
		.test('cpfValidation', INVALID_CPF, isValidCPF)
		.required(REQUIRED_FIELD),
	email: yup.string().required(REQUIRED_FIELD).email(INVALID_EMAIL),
	senha: yup.string().min(6, SHORT_PASS).required(REQUIRED_FIELD),
	razaoSocial: yup.string().required(REQUIRED_FIELD),
	cnpj: yup
		.string()
		.test('cpfValidation', INVALID_CNPJ, isValidCNPJ)
		.required(REQUIRED_FIELD),
	inscricaoEstadual: yup.string().required(REQUIRED_FIELD),
});
