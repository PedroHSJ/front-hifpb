import * as yup from 'yup';
import { INVALID_FORMAT, REQUIRED_FIELD } from '../constants/messages';

export const CardioSchema = yup.object().shape({
	id: yup.number().typeError(INVALID_FORMAT).required(REQUIRED_FIELD),
	cid: yup.string().required(REQUIRED_FIELD),
	imc: yup.number().typeError(INVALID_FORMAT).required(REQUIRED_FIELD),
	sexo: yup.string().required(REQUIRED_FIELD),
	colesterolTotal: yup
		.number()
		.typeError(INVALID_FORMAT)
		.required(REQUIRED_FIELD),
	hdl: yup.number().typeError(INVALID_FORMAT).required(REQUIRED_FIELD),
	ldl: yup.number().typeError(INVALID_FORMAT).required(REQUIRED_FIELD),
	idade: yup.number().typeError(INVALID_FORMAT).required(REQUIRED_FIELD),
	hipertenso: yup.bool().typeError(REQUIRED_FIELD).required(REQUIRED_FIELD),
	diabetico: yup.bool().typeError(REQUIRED_FIELD).required(REQUIRED_FIELD),
	tabagista: yup.bool().typeError(REQUIRED_FIELD).required(REQUIRED_FIELD),
	obeso: yup.bool().typeError(REQUIRED_FIELD).required(REQUIRED_FIELD),
	pressaoSistolica: yup
		.number()
		.typeError(INVALID_FORMAT)
		.required(REQUIRED_FIELD),
	pressaoDiastolica: yup
		.number()
		.typeError(INVALID_FORMAT)
		.required(REQUIRED_FIELD),
});
