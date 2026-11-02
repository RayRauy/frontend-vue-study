import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import { useAuthStore } from "@/stores/auth.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { public: true }, // Mark the login route as public
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { public: false }, // Mark the dashboard route as private
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/users",
      name: "users",
      meta: { public: false }, // Mark the users route as private
      component: () => import("../views/UserView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  console.log(to);
  const authStore = useAuthStore();

  // Conditionally redirect to the login page if the user is not authenticated
  if (!to.meta.public && !authStore.isAuthenticated) {
    return { name: "login" };
  }
  if (to.name === "login" && authStore.isAuthenticated) {
    return { name: "dashboard" };
  }
});
export default router;
