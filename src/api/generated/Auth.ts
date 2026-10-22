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

import { AuthResponse, LoginRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name Login
   * @request POST:/api/auth/login
   */
  login = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<AuthResponse, any>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
