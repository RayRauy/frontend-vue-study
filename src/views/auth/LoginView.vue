<script setup lang="ts">
import { onMounted, reactive, ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import { getCaptcha } from "@/api/captcha";
import type { CaptchaModel } from "@/model/captcha.model";
import { getApiErrorTitle } from "@/util/api-error";
import { login } from "@/api/login";

const router = useRouter();
const authStore = useAuthStore();

const loginForm = reactive({
  email: "",
  password: "",
  captcha: "",
});

const captchaId = ref("");
const captchaImage = ref("");
const loadingCaptcha = ref(false);
const loadingLogin = ref(false);
const loginError = ref("");
const showPassword = ref(false);
const captchaError = ref("");
const captcha = ref<CaptchaModel | null>(null);
const retryAfter = ref(0);

let retryTimer: number | null = null;

const startRetryCountdown = (seconds: number) => {
  if (retryTimer !== null) {
    clearInterval(retryTimer);
  }

  retryAfter.value = seconds;

  retryTimer = window.setInterval(() => {
    retryAfter.value--;

    if (retryAfter.value <= 0) {
      retryAfter.value = 0;

      if (retryTimer !== null) {
        clearInterval(retryTimer);
        retryTimer = null;
      }

      loginError.value = "";
      captchaError.value = "";
    }
  }, 1000);
};

const fetchCaptcha = async () => {
  getCaptcha()
    .then((response) => {
      loadingCaptcha.value = true;
      captcha.value = response.data.data;
      captchaId.value = captcha.value.captchaId;
      captchaImage.value = `data:image/png;base64,${captcha.value.imageBase64}`;
    })
    .catch((error) => {
      console.error("Failed to load captcha:", error);
      if (error.response?.status === 429) {
        const seconds = Number(error.response.headers["retry-after"] || 60);
        startRetryCountdown(seconds);
        captchaError.value =
          "Too many CAPTCHA requests. Please try again later.";
        return;
      }
    })
    .finally(() => {
      loadingCaptcha.value = false;
    });
};

const handleLogin = () => {
  loadingLogin.value = true;
  loginError.value = "";
  const captchaIdValue = captcha?.value?.enabled ? captchaId.value : "";
  const captchaDataValue = captcha?.value?.enabled ? loginForm.captcha : "";

  login(loginForm.email, loginForm.password, captchaIdValue, captchaDataValue)
    .then((response) => {
      authStore.setAuth(response);
      router.push("/users");
    })
    .catch((error) => {
      console.error("Login failed:", error);
      if (error.response?.status === 429) {
        const seconds = Number(error.response.headers["retry-after"] || 60);
        startRetryCountdown(seconds);
        loginError.value = "Too many login attempts.";
        return;
      }

      loginError.value =
        getApiErrorTitle(error) ||
        error.response?.data?.errors ||
        "Invalid email or password.";

      loginForm.captcha = "";
      fetchCaptcha();
    })
    .finally(() => {
      loadingLogin.value = false;
    });
};

onMounted(() => {
  fetchCaptcha();
});

onUnmounted(() => {
  if (retryTimer !== null) {
    clearInterval(retryTimer);
  }
});
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <!-- Logo -->
      <div class="logo">
        <!-- Your school logo will go here -->
      </div>

      <h1 class="company-name">Overseas Language Centre</h1>

      <form class="login-form" @submit.prevent="handleLogin">
        <!-- Email -->
        <input
          v-model="loginForm.email"
          type="email"
          placeholder="Please enter your email"
          autocomplete="email"
        />

        <!-- Password -->
        <div class="password-wrapper">
          <input
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
          />

          <button
            type="button"
            class="password-toggle"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          >
            <!-- Eye -->
            <svg
              v-if="!showPassword"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            <!-- Eye Off -->
            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 3 18 18" />
              <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path
                d="M9.9 4.2A10.5 10.5 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-2.1 3.2"
              />
              <path
                d="M6.6 6.6C3.5 8.6 2 12 2 12s3.5 8 10 8a9.7 9.7 0 0 0 4.1-.9"
              />
            </svg>
          </button>
        </div>

        <!-- Captcha -->
        <div v-if="captcha?.enabled" class="captcha-row">
          <input
            v-model="loginForm.captcha"
            type="text"
            placeholder="Captcha code"
            autocomplete="off"
          />

          <div class="captcha-image">
            <img
              v-if="captchaImage"
              :src="captchaImage"
              alt="Captcha"
              @click="fetchCaptcha"
            />

            <span v-else-if="loadingCaptcha"> Loading... </span>

            <span v-else> CAPTCHA </span>
          </div>
        </div>

        <div v-if="captchaError" class="error-message">
          {{ captchaError }}
        </div>

        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>

        <button type="submit" class="login-button" :disabled="loadingLogin">
          {{ loadingLogin ? "Signing In..." : "Sign In" }}
        </button>
      </form>

      <div class="forgot-password">Forgot Password</div>

      <div class="language">
        <span></span>
        <p>Choose Language</p>
        <span></span>
      </div>

      <div class="globe">🌐</div>
    </div>
  </div>
</template>

<style scoped>
.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #ff0019;
  font-size: 14px;
}

.login-page {
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(135deg, #009b3a, #007b2d);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  box-sizing: border-box;
}

.login-card {
  width: 100%;
  max-width: 640px;

  background: white;
  border-radius: 20px;

  padding: 70px 60px 60px;

  box-sizing: border-box;
}

.logo {
  width: 120px;
  height: 120px;

  margin: 0 auto 30px;

  background: #33923e;
  border-radius: 30px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.company-name {
  text-align: center;

  font-size: 36px;
  font-weight: 400;
  color: #007b2d;

  margin-bottom: 70px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-form input {
  width: 100%;
  height: 58px;

  border: 1px solid #d5d8dc;
  border-radius: 6px;

  padding: 0 20px;

  font-size: 18px;

  box-sizing: border-box;
}

.login-form input:focus {
  outline: none;
  border-color: #009b3a;
}

/* Password */

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  width: 100%;
  padding-right: 50px;
}

.password-toggle {
  position: absolute;

  top: 50%;
  right: 14px;

  transform: translateY(-50%);

  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;
  outline: none;

  background: transparent;
  color: #777;

  box-shadow: none;

  cursor: pointer;
}

.password-toggle:hover,
.password-toggle:focus,
.password-toggle:active {
  background: transparent;
  border: none;
  box-shadow: none;

  color: #009b3a;
}

.password-toggle svg {
  width: 20px;
  height: 20px;

  fill: none;

  pointer-events: none;
}

/* Captcha */

.captcha-row {
  display: flex;
  gap: 15px;
}

.captcha-row input {
  flex: 1;
}

.captcha-image {
  width: 180px;
  height: 58px;

  cursor: pointer;
  user-select: none;

  border: 1px solid #ddd;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  color: #009b3a;
  font-size: 16px;
}

.captcha-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

/* Login button */

.login-button {
  height: 60px;

  border: none;
  border-radius: 30px;

  background: #009b3a;
  color: white;

  font-size: 20px;
  letter-spacing: 4px;

  cursor: pointer;
}

.login-button:hover {
  background: #008532;
}

/* Forgot password */

.forgot-password {
  margin-top: 18px;

  text-align: right;

  color: #329443;

  cursor: pointer;
}

/* Language */

.language {
  display: flex;
  align-items: center;
  gap: 25px;

  margin-top: 35px;

  color: #777;
}

.language span {
  height: 1px;
  background: #ddd;
  flex: 1;
}

.language p {
  white-space: nowrap;
}

/* Globe */

.globe {
  text-align: center;

  margin-top: 25px;

  font-size: 24px;
}
</style>
