import * as yup from 'yup';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL,
	INVALID_CPF,
	SHORT_PASS,
	INVALID_NAME,
} from '../constants/messages';
import { isValidCPF, isValidName } from '../utils';

export const AdminSchema = yup.object().shape({
	nome: yup
		.string()
		.test('is-invalid-name', INVALID_NAME, isValidName)
		.required(REQUIRED_FIELD),
	email: yup.string().required(REQUIRED_FIELD).email(INVALID_EMAIL),
	senha: yup.string().min(6, SHORT_PASS).required(REQUIRED_FIELD),
	cpf: yup
		.string()
		.test('cpfValidation', INVALID_CPF, isValidCPF)
		.required(REQUIRED_FIELD),
	telefone: yup
		.string()
		.required(REQUIRED_FIELD)
		.min(11, 'Número inválido')
		.max(16),
});
