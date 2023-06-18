import * as yup from 'yup';
import {
	REQUIRED_FIELD,
	INVALID_NUMBER,
	INVALID_DATE,
} from '../constants/messages';
import { isValidNumber } from '../utils';

export const ContractSchema = yup.object().shape({
	qtdRequisicaoContratada: yup
		.number()
		.typeError(INVALID_NUMBER)
		.required(REQUIRED_FIELD)
		.test('is-number-and-max-digits', INVALID_NUMBER, isValidNumber),
	dataValidade: yup.date().typeError(INVALID_DATE).required(REQUIRED_FIELD),
	status: yup.mixed().required(REQUIRED_FIELD),
});
