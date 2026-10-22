import type { CaptchaResponse } from "../model/captcha.model";
import api from "./axios";

export function getCaptcha() {
  return api.get<CaptchaResponse>("/captcha");
}
