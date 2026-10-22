import api from "@/api/axios";
import type { LoginResponse, LoginModel } from "@/model/login.model";

export const login = (
  email: string,
  password: string,
  captchaId: string,
  captchaData: string,
): Promise<LoginModel> => {
  return api
    .post<LoginResponse>("/auth/login", {
      email,
      password,
      captchaId,
      captchaData,
    })
    .then((response) => response.data.data);
};
