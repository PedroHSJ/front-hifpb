import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../buttons/Button';
import { SelectInput } from '../../forms/SelectInput';
import { Input } from '../../forms/Input';
import {
	Container,
	Content,
	Title,
	Subtitle,
	SituationValue,
	InformationContainer,
	InformationContainerLeft,
	InformationContainerRight,
	Info,
	ButtonsContainer,
} from './styles';
import { useUpdateContract } from '../../../hooks/useUpdateContract';
import { IClient } from '../../../interfaces/IClient';
import { IClientValidate } from '../../../interfaces/IClientValidate';
import { ContractSchema } from '../../../validations/contract.schema';
import { userStatus } from '../../../constants/enums';
import { getUserStatus, handleErrorMessage } from '../../../utils';

export const useClientValidateModal = () => {
	const { isLoading, error, isSuccess, updateContract } = useUpdateContract();
	const [client, setClient] = useState<IClient | undefined>();
	const {
		control,
		setValue,
		getValues,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IClientValidate>({
		resolver: yupResolver(ContractSchema),
	});

	const openClientValidateModal = (client: IClient) => {
		setClient(client);
	};

	const handleClose = () => {
		reset();
		setClient(undefined);
	};

	useEffect(() => {
		if (!isSuccess) return;
		toast.success('Alterações enviadas com sucesso!');
		reset();
		handleClose();
	}, [isSuccess]);

	useEffect(() => {
		if (!error) return;
		toast.error(`Erro ao alterar o cliente - ${handleErrorMessage(error)}`);
		handleClose();
	}, [error]);

	const ClientValidate = () => {
		const onSubmit = (formData: IClientValidate) => {
			if (!client) return;
			updateContract({
				...formData,
				clienteId: client.id,
				status: getUserStatus('key', getValues('status')),
			});
		};

		useEffect(() => {
			setValue('status', getUserStatus('label', +client?.status!));
		}, []);

		if (!client) return <></>;
		return (
			<Container>
				<Content>
					<Title>Informações do cliente</Title>
					<InformationContainer>
						<InformationContainerLeft>
							<Info>
								<strong>Nome: </strong>
								{client.nomeResponsavel}
							</Info>
							<Info>
								<strong>Razão social: </strong>
								{client.razaoSocial}
							</Info>
							<Info>
								<strong>Email: </strong>
								{client.email}
							</Info>
						</InformationContainerLeft>
						<InformationContainerRight>
							<Info>
								<strong>CPF: </strong>
								{client.cpfResponsavel}
							</Info>
							<Info>
								<strong>CNPJ: </strong>
								{client.cnpj}
							</Info>
							<Info>
								<strong>Insc. Estadual: </strong>
								{client.inscricaoEstadual}
							</Info>
						</InformationContainerRight>
					</InformationContainer>

					<Subtitle>
						Situação atual:
						<SituationValue>
							{userStatus[+client?.status].label}
						</SituationValue>
					</Subtitle>

					<Form onSubmit={handleSubmit(onSubmit)}>
						<SelectInput
							name="status"
							control={control}
							label="Status do cliente"
							options={userStatus}
							error={errors.status?.message}
						/>

						<Input
							type="number"
							name="qtdRequisicaoContratada"
							control={control}
							placeholder="Quantidade de requisições"
							error={errors.qtdRequisicaoContratada?.message}
						/>

						<Input
							label="Data de validade do contrato"
							type="date"
							name="dataValidade"
							control={control}
							placeholder="Data de validade"
							error={errors.dataValidade?.message}
						/>
						<ButtonsContainer>
							<Button
								onClick={handleClose}
								type="button"
								label="Cancelar"
							/>
							<Button
								onClick={() => {}}
								type="submit"
								label="Salvar"
								loading={isLoading}
							/>
						</ButtonsContainer>
					</Form>
				</Content>
			</Container>
		);
	};

	return {
		ClientValidate,
		openClientValidateModal,
		isSuccess,
	};
};
