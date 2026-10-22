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
  BaseApiListPermissionResponse,
  BaseApiPermissionResponse,
  PermissionFilter,
  PermissionImportResult,
  PermissionRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Permissions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Permissions
   * @name GetById5
   * @request GET:/api/permissions/{id}
   */
  getById5 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiPermissionResponse, any>({
      path: `/api/permissions/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name UpdateById3
   * @request PUT:/api/permissions/{id}
   */
  updateById3 = (
    id: number,
    data: PermissionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPermissionResponse, any>({
      path: `/api/permissions/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name DeleteById3
   * @request DELETE:/api/permissions/{id}
   */
  deleteById3 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiPermissionResponse, any>({
      path: `/api/permissions/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name GetAll1
   * @request GET:/api/permissions
   */
  getAll1 = (
    query: {
      name: PermissionFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListPermissionResponse, any>({
      path: `/api/permissions`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name Create5
   * @request POST:/api/permissions
   */
  create5 = (data: PermissionRequest, params: RequestParams = {}) =>
    this.request<BaseApiPermissionResponse, any>({
      path: `/api/permissions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name ImportXslx2
   * @request POST:/api/permissions/import-xlsx
   */
  importXslx2 = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<PermissionImportResult, any>({
      path: `/api/permissions/import-xlsx`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name GetAllPagination5
   * @request GET:/api/permissions/pagination
   */
  getAllPagination5 = (
    query: {
      filter: PermissionFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<object, any>({
      path: `/api/permissions/pagination`,
      method: "GET",
      query: query,
      ...params,
    });
}
