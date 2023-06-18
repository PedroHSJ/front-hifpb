import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../buttons/Button';
import { Container, ButtonContainer } from './styles';
import { Form } from 'react-router-dom';
import { CardioSchema } from '../../../validations/cardio.schema';
import { ICardioForm } from '../../../interfaces/ICardioForm';
import { usePlayground } from '../../../hooks/usePlayground';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { handleErrorMessage } from '../../../utils';
import { Row } from '../../layouts/Row';
import { Input } from '../../forms/Input';
import { BooleanInput } from '../../forms/BooleanInput';
import { useDialog } from '../../functional/useDialog';

export const CardioPlaygroundCard = () => {
	const { Dialog, dialog } = useDialog();
	const { isLoading, error, result, cardio } = usePlayground();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ICardioForm>({ resolver: yupResolver(CardioSchema) });

	const onSubmit = (cardioForm: ICardioForm) => {
		cardio(cardioForm);
	};

	useEffect(() => {
		if (!result) return;
		dialog(
			'Resultado',
			`Paciente foi classificado com risco ${result.risco.toLocaleLowerCase()}. Essa resposta tem acurácia de ${
				result.prob
			}%.`,
			[{ text: 'OK', onPress: () => {} }],
		);
	}, [result]);

	useEffect(() => {
		if (!error) return;
		toast.error(`Erro na requisição - ${handleErrorMessage(error)}`);
	}, [error]);

	return (
		<Container>
			<Dialog />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Input
						type="number"
						name="id"
						control={control}
						label="Identificador"
						error={errors.id?.message}
					/>
					<Input
						type="text"
						name="cid"
						control={control}
						label="CID"
						error={errors.cid?.message}
					/>
				</Row>
				<Row>
					<Input
						type="number"
						name="imc"
						control={control}
						label="IMC"
						error={errors.imc?.message}
					/>
					<Input
						type="text"
						name="sexo"
						control={control}
						label="Gênero"
						placeholder={`"masculino" ou "feminino"`}
						error={errors.sexo?.message}
					/>
				</Row>
				<Row>
					<Input
						type="number"
						name="colesterolTotal"
						control={control}
						label="Colesterol"
						error={errors.colesterolTotal?.message}
					/>
					<Input
						type="number"
						name="hdl"
						control={control}
						label="HDL"
						error={errors.hdl?.message}
					/>
				</Row>
				<Row>
					<Input
						type="number"
						name="ldl"
						control={control}
						label="LDL"
						error={errors.ldl?.message}
					/>
					<Input
						type="number"
						name="idade"
						control={control}
						label="Idade"
						error={errors.idade?.message}
					/>
				</Row>
				<Row>
					<Input
						type="number"
						name="pressaoSistolica"
						control={control}
						label="Pressão sistólica"
						error={errors.pressaoSistolica?.message}
					/>
					<Input
						type="number"
						name="pressaoDiastolica"
						control={control}
						label="Pressão Diastólica"
						error={errors.pressaoDiastolica?.message}
					/>
				</Row>
				<Row>
					<BooleanInput
						type="text"
						name="hipertenso"
						control={control}
						label="Hipertenso"
						error={errors.hipertenso?.message}
					/>
					<BooleanInput
						type="text"
						name="diabetico"
						control={control}
						label="Diabético"
						error={errors.diabetico?.message}
					/>
				</Row>
				<Row>
					<BooleanInput
						type="text"
						name="tabagista"
						control={control}
						label="Tabagista"
						error={errors.tabagista?.message}
					/>
					<BooleanInput
						type="text"
						name="obeso"
						control={control}
						label="Obeso"
						error={errors.obeso?.message}
					/>
				</Row>
				<ButtonContainer>
					<Button type="submit" label="Enviar" loading={isLoading} />
				</ButtonContainer>
			</Form>
		</Container>
	);
};
