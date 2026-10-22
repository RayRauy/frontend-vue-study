import axios from "axios";
import type { LoginResponse, LoginModel } from "@/model/login.model";

export const refreshToken = (refreshToken: string): Promise<LoginModel> => {
  return axios
    .post<LoginResponse>("/api/auth/refresh", {
      refreshToken,
    })
    .then((response) => response.data.data);
};
