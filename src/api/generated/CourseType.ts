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
  BaseApiCourseTypeResponse,
  BaseApiListCourseTypeResponse,
  BaseApiPaginationListCourseTypeResponse,
  CourseTypeFilter,
  CourseTypeImportResult,
  CourseTypeRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CourseType<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Course Type
   * @name GetById8
   * @request GET:/api/course-type/{id}
   */
  getById8 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiCourseTypeResponse, any>({
      path: `/api/course-type/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name UpdateById5
   * @request PUT:/api/course-type/{id}
   */
  updateById5 = (
    id: number,
    data: CourseTypeRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiCourseTypeResponse, any>({
      path: `/api/course-type/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name DeleteById5
   * @request DELETE:/api/course-type/{id}
   */
  deleteById5 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiCourseTypeResponse, any>({
      path: `/api/course-type/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name GetAllPagination3
   * @request GET:/api/course-type
   */
  getAllPagination3 = (
    query: {
      filter: CourseTypeFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListCourseTypeResponse, any>({
      path: `/api/course-type`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name Create8
   * @request POST:/api/course-type
   */
  create8 = (data: CourseTypeRequest, params: RequestParams = {}) =>
    this.request<BaseApiCourseTypeResponse, any>({
      path: `/api/course-type`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name ImportXslx4
   * @request POST:/api/course-type/import-xlsx
   */
  importXslx4 = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<CourseTypeImportResult, any>({
      path: `/api/course-type/import-xlsx`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name ExportXlsx3
   * @request GET:/api/course-type/export-xlsx
   */
  exportXlsx3 = (params: RequestParams = {}) =>
    this.request<Blob, any>({
      path: `/api/course-type/export-xlsx`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course Type
   * @name GetAll8
   * @request GET:/api/course-type/all
   */
  getAll8 = (
    query: {
      filter: CourseTypeFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListCourseTypeResponse, any>({
      path: `/api/course-type/all`,
      method: "GET",
      query: query,
      ...params,
    });
}
