import type { ApiResponse } from "../model/api-response.model";
import type { UserModel } from "./user.model";

export interface LoginModel {
  accessToken: string;
  refreshToken: string;
  type: string;
  user: UserModel;
}

export type LoginResponse = ApiResponse<LoginModel>;
