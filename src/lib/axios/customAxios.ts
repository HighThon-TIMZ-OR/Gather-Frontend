import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "../../config/config.json";
import { REQUEST_KEY, ACCESS_KEY } from "../../constants/token/token";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  timeout: 10000,
  headers: {
    [REQUEST_KEY]: `Bearer ${localStorage.getItem(ACCESS_KEY)}`,
  },
});

// customAxios.interceptors.request.use(
//   function (config: any) {
//     try {
//       const token = localStorage.getItem(ACCESS_KEY);

//       token &&
//         (config.headers = {
//           "access-token": `Bearer ${token}`,
//         });
//       return config;
//     } catch (e) {}
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );
