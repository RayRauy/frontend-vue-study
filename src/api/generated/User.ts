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

import {
  BaseApiListUserResponse,
  BaseApiPaginationListUserResponse,
  BaseApiUserResponse,
  BaseApiVoid,
  UserFilter,
  UserRequest,
  UserSecurityStatusRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name GetById
   * @request GET:/api/user/{id}
   * @secure
   */
  getById = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UpdateById
   * @request PUT:/api/user/{id}
   * @secure
   */
  updateById = (id: number, data: UserRequest, params: RequestParams = {}) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name DeleteById
   * @request DELETE:/api/user/{id}
   * @secure
   */
  deleteById = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiVoid, any>({
      path: `/api/user/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name GetAuthenticatedUser
   * @request GET:/api/user
   * @secure
   */
  getAuthenticatedUser = (
    query: {
      filter: UserFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListUserResponse, any>({
      path: `/api/user`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name Create
   * @request POST:/api/user
   * @secure
   */
  create = (data: UserRequest, params: RequestParams = {}) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UploadProfileImage
   * @request POST:/api/user/{id}/profile-image
   * @secure
   */
  uploadProfileImage = (
    id: number,
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/profile-image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name AssignRole
   * @request PATCH:/api/user/{id}/role
   * @secure
   */
  assignRole = (id: number, data: UserRequest, params: RequestParams = {}) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/role`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name RestoreUser
   * @request PATCH:/api/user/{id}/restore
   * @secure
   */
  restoreUser = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/restore`,
      method: "PATCH",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name SetEnable
   * @request PATCH:/api/user/{id}/enable
   * @secure
   */
  setEnable = (
    id: number,
    data: UserSecurityStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/enable`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name AssignCredentialNotExpired
   * @request PATCH:/api/user/{id}/credentials-expiry
   * @secure
   */
  assignCredentialNotExpired = (
    id: number,
    data: UserSecurityStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/credentials-expiry`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name AssignAccountNotLocked
   * @request PATCH:/api/user/{id}/account-lock
   * @secure
   */
  assignAccountNotLocked = (
    id: number,
    data: UserSecurityStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/account-lock`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name AssignAccountNotExpired
   * @request PATCH:/api/user/{id}/account-expiry
   * @secure
   */
  assignAccountNotExpired = (
    id: number,
    data: UserSecurityStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiUserResponse, any>({
      path: `/api/user/${id}/account-expiry`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name GetAll3
   * @request GET:/api/user/all
   * @secure
   */
  getAll3 = (
    query: {
      filter: UserFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListUserResponse, any>({
      path: `/api/user/all`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
