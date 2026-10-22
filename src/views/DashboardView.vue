<script setup lang="ts">
import api from "@/api/axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {
  try {
    await api.post("/auth/logout", {
      refreshToken: authStore.refreshToken,
    });
  } finally {
    authStore.logout();
    router.push("/login");
  }
};

const testProtectedApi = async () => {
  try {
    const response = await api.get("/user");
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Test failed:", error);
  }
};
</script>
<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Login successful!</p>
    <button @click="testProtectedApi">Test Protected API</button>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: 40px;
}
</style>
