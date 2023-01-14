import { useMutation } from "react-query";
import { postSignupParam } from "../../repositories/auth/auth.param";
import loginRepository from "../../repositories/auth/auth.repository";

export const useSendSignupMutation = () => {
  const mutation = useMutation(
    ({ account_id, name, password }: postSignupParam) =>
      loginRepository.sendSignup({ account_id, name, password })
  );
  return mutation;
};
