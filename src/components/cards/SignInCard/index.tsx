import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../forms/Form";
import { Button } from "../../buttons/Button";
import { Input } from "../../forms/Input";
import { LinkButton } from "../../buttons/LinkButton";
import {
  Container,
  TopContainer,
  TitleContainer,
  Image,
  ButtonsContainer,
} from "./styles";
import { ISignInForm } from "../../../interfaces/ISignInForm";
import { SignInSchema } from "../../../validations/signin.schema";
import { useAuth } from "../../../hooks/auth";
import Logo from "../../../assets/images/logo.png";
import { handleErrorMessage } from "../../../utils";

export const SignInCard = (): JSX.Element => {
  const { login, loading, error } = useAuth();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISignInForm>({ resolver: yupResolver(SignInSchema) });

  const onSubmit = (formData: ISignInForm) => {
    login(formData);
  };

  useEffect(() => {
    if (!error) return;
    const errorOK = error as Error;
    toast.error(`Erro no login: ${errorOK.message}`);
  }, [error]);

  return (
    <Container>
      <TopContainer>
        <TitleContainer>
          <Image src={Logo} />
        </TitleContainer>
      </TopContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="username"
          control={control}
          placeholder="Username"
          error={errors.username?.message}
        />
        <Input
          type="password"
          name="password"
          control={control}
          placeholder="Senha"
          error={errors.password?.message}
        />
        <ButtonsContainer>
          <LinkButton
            label="Criar conta"
            type="button"
            path="/createaccount"
            onClick={() => {}}
          />
          <Button type="submit" label="Acessar" loading={loading} />
        </ButtonsContainer>
      </Form>
    </Container>
  );
};
