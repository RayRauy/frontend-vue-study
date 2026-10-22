import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import type { LoginResponse } from "@/model/login.model";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const publicEndpoints = ["/auth/login", "/auth/refresh", "/captcha"];

const isPublicEndpoint = (url?: string) => {
  return publicEndpoints.some((endpoint) => url?.includes(endpoint));
};

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// ========================================
// Refresh lock
// ========================================
let refreshPromise: Promise<string> | null = null;
function getRefreshPromise(): Promise<string> {
  if (!refreshPromise) {
    refreshPromise = refreshAccessToken().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}

// ========================================
// Request interceptor
// ========================================

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && !isPublicEndpoint(config.url)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// ========================================
// Response interceptor
// ========================================

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    // Rate limited
    if (error.response?.status === 429) {
      const retryAfter = error.response.headers["retry-after"];

      console.warn(`Too many requests. Retry after ${retryAfter} seconds.`);

      return Promise.reject(error);
    }

    // Don't refresh public requests
    if (!originalRequest || isPublicEndpoint(originalRequest.url)) {
      return Promise.reject(error);
    }

    // Only handle 401
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const newAccessToken = await getRefreshPromise();
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      clearAuth();
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
      return Promise.reject(refreshError);
    }
  },
);

// ========================================
// Refresh access token
// ========================================

async function refreshAccessToken(): Promise<string> {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("Refresh token not found");
  }

  const response = await axios.post<LoginResponse>("/api/auth/refresh", {
    refreshToken,
  });

  const auth = response.data.data;

  localStorage.setItem("accessToken", auth.accessToken);
  localStorage.setItem("refreshToken", auth.refreshToken);
  localStorage.setItem("user", JSON.stringify(auth.user));

  return auth.accessToken;
}

// ========================================
// Clear authentication
// ========================================

function clearAuth() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
}

export default api;
