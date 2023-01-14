import axios from "axios";
import CONFIG from "../../config/config.json";
import { LoginResponse, SignupResponse } from "../../types/auth/auth.type";
import { postSignupParam } from "./auth.param";

class AuthRepository {
  public async sendSignup({
    account_id,
    name,
    password,
  }: postSignupParam): Promise<SignupResponse> {
    const { data } = await axios.post(`${CONFIG.server}/users/signup`, {
      account_id,
      name,
      password,
    });
    return data;
  }
}

export default new AuthRepository();
