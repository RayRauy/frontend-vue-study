import api from "@/api/axios";
import type { ApiResponse, Pagination } from "@/model/api-response.model";

import type {
  UserModel,
  UserSecurityStatusRequest,
  UserRequest,
} from "@/model/user.model";

/* -----------------------------
   RESPONSE TYPES
----------------------------- */

interface UserPaginatedResponse {
  data: UserModel[];
  pagination?: Pagination;
}

/* -----------------------------
   GET USERS
----------------------------- */

export const getUsers = (
  page: number,
  size: number,
  name?: string,
): Promise<UserPaginatedResponse> => {
  return api
    .get<UserPaginatedResponse>("/user", {
      params: {
        page,
        size,
        name: name || undefined,
      },
    })
    .then((response) => response.data);
};

/* -----------------------------
   GET USER BY ID
----------------------------- */

export const getUserById = (id: number): Promise<ApiResponse<UserModel>> => {
  return api
    .get<ApiResponse<UserModel>>(`/user/${id}`)
    .then((response) => response.data);
};

/* -----------------------------
   CREATE USER
----------------------------- */

export const createUser = (
  request: UserRequest,
): Promise<ApiResponse<UserModel>> => {
  return api
    .post<ApiResponse<UserModel>>("/user", request)
    .then((response) => response.data);
};

/* -----------------------------
   UPDATE USER
----------------------------- */

export const updateUser = (
  id: number,
  request: UserRequest,
): Promise<ApiResponse<UserModel>> => {
  return api
    .put<ApiResponse<UserModel>>(`/user/${id}`, request)
    .then((response) => response.data);
};

/* -----------------------------
   DELETE USER
----------------------------- */

export const deleteUser = (id: number): Promise<ApiResponse<void>> => {
  return api
    .delete<ApiResponse<void>>(`/user/${id}`)
    .then((response) => response.data);
};

/* -----------------------------
   RESTORE USER
----------------------------- */

export const restoreUser = (id: number): Promise<ApiResponse<UserModel>> => {
  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/restore`)
    .then((response) => response.data);
};

/* -----------------------------
   UPLOAD PROFILE IMAGE
----------------------------- */

export const uploadProfileImage = (
  id: number,
  file: File,
): Promise<ApiResponse<UserModel>> => {
  const formData = new FormData();

  formData.append("file", file);

  return api
    .post<ApiResponse<UserModel>>(`/user/${id}/profile-image`, formData)
    .then((response) => response.data);
};

/* -----------------------------
   ENABLE / DISABLE USER
----------------------------- */

export const setUserEnabled = (
  id: number,
  enabled: boolean,
): Promise<ApiResponse<UserModel>> => {
  const request: UserSecurityStatusRequest = {
    enabled,
  };

  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/enable`, request)
    .then((response) => response.data);
};

/* -----------------------------
   ACCOUNT LOCK
----------------------------- */

export const setAccountNonLocked = (
  id: number,
  accountNotLocked: boolean,
): Promise<ApiResponse<UserModel>> => {
  const request: UserSecurityStatusRequest = {
    accountNotLocked,
  };

  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/account-lock`, request)
    .then((response) => response.data);
};

/* -----------------------------
   ACCOUNT EXPIRY
----------------------------- */

export const setAccountNonExpired = (
  id: number,
  accountNotExpired: boolean,
): Promise<ApiResponse<UserModel>> => {
  const request: UserSecurityStatusRequest = {
    accountNotExpired,
  };

  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/account-expiry`, request)
    .then((response) => response.data);
};

/* -----------------------------
   CREDENTIAL EXPIRY
----------------------------- */

export const setCredentialsNonExpired = (
  id: number,
  credentialsNotExpired: boolean,
): Promise<ApiResponse<UserModel>> => {
  const request: UserSecurityStatusRequest = {
    credentialsNotExpired,
  };

  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/credentials-expiry`, request)
    .then((response) => response.data);
};

/* -----------------------------
   ASSIGN ROLES
----------------------------- */

export const assignRoles = (
  id: number,
  roleIds: number[],
): Promise<ApiResponse<UserModel>> => {
  return api
    .patch<ApiResponse<UserModel>>(`/user/${id}/role`, {
      roleIds,
    })
    .then((response) => response.data);
};
