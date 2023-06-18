import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button } from '../../buttons/Button';
import { Form } from '../../forms/Form';
import { useDialog } from '../../functional/useDialog';
import { Row } from '../../layouts/Row';
import { Input } from '../../forms/Input';
import { Container, ButtonsContainer } from './styles';
import { IAdmin } from '../../../interfaces/IAdmin';
import { useCreateAdmin } from '../../../hooks/useCreateAdmin';
import { AdminSchema } from '../../../validations/admin.schema';
import { handleErrorMessage } from '../../../utils';

export const CreateAdminCard = (): JSX.Element => {
	const { Dialog, dialog } = useDialog();
	const { isLoading, error, isSuccess, createAdmin } = useCreateAdmin();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IAdmin>({ resolver: yupResolver(AdminSchema) });

	const onSubmit = (formData: IAdmin) => {
		createAdmin(formData);
	};

	useEffect(() => {
		if (!error) return;
		toast.error(
			`Erro ao enviar a solicitação: ${handleErrorMessage(error)}`,
		);
	}, [error]);

	useEffect(() => {
		if (!isSuccess) return;
		dialog('Sucesso!', 'Usuário cadastrado conforme solicitado.', [
			{ text: 'Certo!', onPress: reset },
		]);
	}, [isSuccess]);

	return (
		<Container>
			<Dialog />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Input
						type="text"
						name="nome"
						control={control}
						placeholder="Nome"
						error={errors.nome?.message}
					/>
					<Input
						type="text"
						name="cpf"
						control={control}
						placeholder="CPF"
						error={errors.cpf?.message}
					/>
				</Row>

				<Row>
					<Input
						type="email"
						name="email"
						control={control}
						placeholder="email"
						error={errors.email?.message}
					/>
					<Input
						type="password"
						name="senha"
						control={control}
						placeholder="Senha"
						error={errors.senha?.message}
					/>
				</Row>

				<Input
					type="phone"
					name="telefone"
					control={control}
					placeholder="Telefone"
					maxLength={16}
					error={errors.telefone?.message}
				/>
				<ButtonsContainer>
					<Button
						type="submit"
						label="Cadastrar"
						loading={isLoading}
					/>
				</ButtonsContainer>
			</Form>
		</Container>
	);
};
