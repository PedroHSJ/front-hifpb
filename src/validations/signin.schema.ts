import * as yup from "yup";
import { REQUIRED_FIELD } from "../constants/messages";

export const SignInSchema = yup.object().shape({
  username: yup.string().required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
});
