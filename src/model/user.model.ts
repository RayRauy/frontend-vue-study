import type { ApiPaginatedResponse } from "./api-response.model";

export interface UserModel {
  id: number;
  name: string;
  email: string;

  enabled: boolean;
  accountNotLocked: boolean;
  accountNotExpired: boolean;
  credentialsNotExpired: boolean;

  activeTokenId: string;
  profile: string;
  roles: string[];
}

export interface UserRequest {
  email: string;
  password?: string;
  name: string;
  profile?: string | null;
  roleIds: number[];
}

export interface UserSecurityStatusRequest {
  enabled?: boolean;
  accountNotLocked?: boolean;
  accountNotExpired?: boolean;
  credentialsNotExpired?: boolean;
}

// export type UserResponse = ApiPaginatedResponse<UserModel>;
