import { useMutation } from "react-query";
import {
  postLoginParam,
  postSignupParam,
} from "../../repositories/auth/auth.param";
import loginRepository from "../../repositories/auth/auth.repository";

export const useSendSignupMutation = () => {
  const mutation = useMutation(
    ({ account_id, name, password }: postSignupParam) =>
      loginRepository.sendSignup({ account_id, name, password })
  );
  return mutation;
};

export const useSendLoginMutation = () => {
  const mutation = useMutation(({ account_id, password }: postLoginParam) =>
    loginRepository.sendLogin({ account_id, password })
  );
  return mutation;
};
