import axios from "axios";
import type { ApiError } from "@/model/api-error.model";

export function getApiErrorTitle(
  error: unknown,
  fallback = "Something went wrong.",
): string {
  if (axios.isAxiosError<ApiError>(error)) {
    return error.response?.data?.errors || error.message || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}
