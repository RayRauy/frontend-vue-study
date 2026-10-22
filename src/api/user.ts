import api from "@/api/axios";
import type { Pagination } from "@/model/api-response.model";
import type { UserModel } from "@/model/user.model";

interface UserResponse {
  data: UserModel[];
  pagination?: Pagination;
}

export const getUsers = (
  page: number,
  size: number,
  name?: string,
): Promise<UserResponse> => {
  return api
    .get<UserResponse>("/user", {
      params: {
        page,
        size,
        name: name || undefined,
      },
    })
    .then((response) => response.data);
};
