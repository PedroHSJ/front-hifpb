import { SignInCard } from "../../components/cards/SignInCard";
import { MinimalLink } from "../../components/buttons/MinimalLink";
import {
  SignInContainer,
  BottomContainer,
  ContentBottomRight,
  ContentBottomLeft,
  CreatedBy,
} from "./styles";

export const SignIn = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignInCard />
      <BottomContainer>
        {/* <ContentBottomLeft>
					<MinimalLink to="/term">Termo</MinimalLink>
					<MinimalLink to="/privacy">Privacidade</MinimalLink>
				</ContentBottomLeft>
				<ContentBottomRight>
					<CreatedBy>&copy; Criado pela Novetech</CreatedBy>
					<MinimalLink to="/about">Sobre o time</MinimalLink>
				</ContentBottomRight> */}
      </BottomContainer>
    </SignInContainer>
  );
};
