import type { ApiPaginatedResponse } from "./api-response.model";

export interface RoleModel {
  id: number;
  name: string;
  description: string | null;
}

export type RolesResponse = ApiPaginatedResponse<RoleModel>;
