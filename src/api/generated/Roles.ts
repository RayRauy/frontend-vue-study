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
  BaseApiListRoleResponse,
  BaseApiPaginationListRoleResponse,
  BaseApiRoleResponse,
  RoleFilter,
  RoleImportResult,
  RoleRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Roles<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name GetById4
   * @request GET:/api/role/{id}
   */
  getById4 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiRoleResponse, any>({
      path: `/api/role/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name UpdateById2
   * @request PUT:/api/role/{id}
   */
  updateById2 = (id: number, data: RoleRequest, params: RequestParams = {}) =>
    this.request<BaseApiRoleResponse, any>({
      path: `/api/role/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name DeleteById2
   * @request DELETE:/api/role/{id}
   */
  deleteById2 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiRoleResponse, any>({
      path: `/api/role/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name AssignPermission
   * @request PATCH:/api/role/{id}
   */
  assignPermission = (
    id: number,
    data: RoleRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiRoleResponse, any>({
      path: `/api/role/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name ImportXslx1
   * @request POST:/api/role/import-xlsx
   */
  importXslx1 = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<RoleImportResult, any>({
      path: `/api/role/import-xlsx`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Create4
   * @request POST:/api/role/create
   */
  create4 = (data: RoleRequest, params: RequestParams = {}) =>
    this.request<BaseApiRoleResponse, any>({
      path: `/api/role/create`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name GetAll6
   * @request GET:/api/role
   */
  getAll6 = (
    query: {
      name: RoleFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListRoleResponse, any>({
      path: `/api/role`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name GetAllPagination4
   * @request GET:/api/role/pagination
   */
  getAllPagination4 = (
    query: {
      filter: RoleFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListRoleResponse, any>({
      path: `/api/role/pagination`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name ExportXlsx1
   * @request GET:/api/role/export-xlsx
   */
  exportXlsx1 = (params: RequestParams = {}) =>
    this.request<Blob, any>({
      path: `/api/role/export-xlsx`,
      method: "GET",
      ...params,
    });
}
