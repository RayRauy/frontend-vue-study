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
  BaseApiListTeacherResponse,
  BaseApiPaginationListTeacherResponse,
  BaseApiTeacherResponse,
  TeacherFilter,
  TeacherImportResult,
  TeacherRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Teacher<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Teacher
   * @name GetById1
   * @request GET:/api/teacher/{id}
   */
  getById1 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiTeacherResponse, any>({
      path: `/api/teacher/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name UpdateById1
   * @request PUT:/api/teacher/{id}
   */
  updateById1 = (
    id: number,
    data: TeacherRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiTeacherResponse, any>({
      path: `/api/teacher/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name DeleteById1
   * @request DELETE:/api/teacher/{id}
   */
  deleteById1 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiTeacherResponse, any>({
      path: `/api/teacher/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name GetAllPagination
   * @request GET:/api/teacher
   */
  getAllPagination = (
    query: {
      filter: TeacherFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListTeacherResponse, any>({
      path: `/api/teacher`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name Create1
   * @request POST:/api/teacher
   */
  create1 = (data: TeacherRequest, params: RequestParams = {}) =>
    this.request<BaseApiTeacherResponse, any>({
      path: `/api/teacher`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name ImportXslx
   * @request POST:/api/teacher/import-xlsx
   */
  importXslx = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<TeacherImportResult, any>({
      path: `/api/teacher/import-xlsx`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name ExportXlsx
   * @request GET:/api/teacher/export-xlsx
   */
  exportXlsx = (params: RequestParams = {}) =>
    this.request<Blob, any>({
      path: `/api/teacher/export-xlsx`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teacher
   * @name GetAll4
   * @request GET:/api/teacher/all
   */
  getAll4 = (
    query: {
      filter: TeacherFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListTeacherResponse, any>({
      path: `/api/teacher/all`,
      method: "GET",
      query: query,
      ...params,
    });
}
