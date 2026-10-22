/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CaptchaRequest, CaptchaResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Captcha<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Captcha
   * @name Validate
   * @request POST:/api/captcha/validate
   */
  validate = (data: CaptchaRequest, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/api/captcha/validate`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Captcha
   * @name GetCaptcha
   * @request GET:/api/captcha
   */
  getCaptcha = (params: RequestParams = {}) =>
    this.request<CaptchaResponse, any>({
      path: `/api/captcha`,
      method: "GET",
      ...params,
    });
}
