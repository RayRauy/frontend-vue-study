import { defineStore } from "pinia";
import type { LoginModel } from "@/model/login.model";
import type { UserModel } from "@/model/user.model";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",

    user: JSON.parse(
      localStorage.getItem("user") || "null",
    ) as UserModel | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    setAuth(response: LoginModel) {
      this.accessToken = response.accessToken;
      this.refreshToken = response.refreshToken;
      this.user = response.user;

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));
    },

    logout() {
      this.accessToken = "";
      this.refreshToken = "";
      this.user = null;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },
  },
});
