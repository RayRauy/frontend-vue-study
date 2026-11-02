<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    await ElMessageBox.confirm(
      "Are you sure you want to logout?",
      "Logout Confirmation",
      {
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        type: "warning",
      },
    );
  } catch (error) {
    console.error("Logout failed:", error);
  }
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <aside>Sidebar</aside>
  <header>
    <div class="wrapper">
      <nav v-if="authStore.isAuthenticated">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/users">User</RouterLink>
        <RouterLink v-if="!authStore.isAuthenticated" to="/login"
          >Login</RouterLink
        >
        <a v-else @click.prevent="handleLogout" href="#">Logout</a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
