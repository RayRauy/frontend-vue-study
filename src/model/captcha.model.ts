import type { ApiResponse } from "../model/api-response.model";

export interface CaptchaModel {
  enabled: boolean;
  captchaId: string;
  imageBase64: string;
}

export type CaptchaResponse = ApiResponse<CaptchaModel>;
