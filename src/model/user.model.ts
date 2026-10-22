import type { ApiPaginatedResponse } from "./api-response.model";

export interface UserModel {
  id: number;
  name: string;
  email: string;
  enabled: boolean;
  activeTokenId: string;
  profile: string;
  roles: string[];
}

export type UserResponse = ApiPaginatedResponse<UserModel>;
