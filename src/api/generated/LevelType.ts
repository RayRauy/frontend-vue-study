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
  BaseApiLevelTypeResponse,
  BaseApiListLevelTypeResponse,
  BaseApiPaginationListLevelTypeResponse,
  LevelTypeFilter,
  LevelTypeImportResult,
  LevelTypeRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LevelType<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Level Type
   * @name GetById6
   * @request GET:/api/level-type/{id}
   */
  getById6 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiLevelTypeResponse, any>({
      path: `/api/level-type/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name UpdateById4
   * @request PUT:/api/level-type/{id}
   */
  updateById4 = (
    id: number,
    data: LevelTypeRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiLevelTypeResponse, any>({
      path: `/api/level-type/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name DeleteById4
   * @request DELETE:/api/level-type/{id}
   */
  deleteById4 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiLevelTypeResponse, any>({
      path: `/api/level-type/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name GetAllPagination2
   * @request GET:/api/level-type
   */
  getAllPagination2 = (
    query: {
      filter: LevelTypeFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListLevelTypeResponse, any>({
      path: `/api/level-type`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name Create6
   * @request POST:/api/level-type
   */
  create6 = (data: LevelTypeRequest, params: RequestParams = {}) =>
    this.request<BaseApiLevelTypeResponse, any>({
      path: `/api/level-type`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name ImportXslx3
   * @request POST:/api/level-type/import-xlsx
   */
  importXslx3 = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<LevelTypeImportResult, any>({
      path: `/api/level-type/import-xlsx`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name ExportXlsx2
   * @request GET:/api/level-type/export-xlsx
   */
  exportXlsx2 = (params: RequestParams = {}) =>
    this.request<Blob, any>({
      path: `/api/level-type/export-xlsx`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Level Type
   * @name GetAll7
   * @request GET:/api/level-type/all
   */
  getAll7 = (
    query: {
      filter: LevelTypeFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListLevelTypeResponse, any>({
      path: `/api/level-type/all`,
      method: "GET",
      query: query,
      ...params,
    });
}
