import api from "@/api/axios";

import type { Pagination } from "@/model/api-response.model";
import type { RoleModel } from "@/model/role.model";

interface RolesResponse {
  data: RoleModel[];
  //   pagination?: Pagination;
}
export const getAllRoles = (): Promise<RolesResponse> => {
  return api.get<RolesResponse>("/role").then((response) => response.data);
};
