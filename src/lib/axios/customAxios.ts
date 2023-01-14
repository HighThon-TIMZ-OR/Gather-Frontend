import axios from "axios";
import CONFIG from "../../config/config.json";
import { REQUEST_KEY, ACCESS_KEY } from "../../constants/token/token";
export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
  },
});
