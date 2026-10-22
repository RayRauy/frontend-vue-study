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
  BaseApiListStudentResponse,
  BaseApiPaginationListStudentResponse,
  BaseApiStudentImportResult,
  BaseApiStudentResponse,
  StudentFilter,
  StudentRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Student<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Student
   * @name GetById2
   * @request GET:/api/student/{id}
   */
  getById2 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name Update
   * @request PUT:/api/student/{id}
   */
  update = (id: number, data: StudentRequest, params: RequestParams = {}) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name Delete
   * @request DELETE:/api/student/{id}
   */
  delete = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name GetAllPagination1
   * @request GET:/api/student
   */
  getAllPagination1 = (
    query: {
      filter: StudentFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiPaginationListStudentResponse, any>({
      path: `/api/student`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name Create2
   * @request POST:/api/student
   */
  create2 = (data: StudentRequest, params: RequestParams = {}) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name UploadStudentImage
   * @request POST:/api/student/{id}/image
   */
  uploadStudentImage = (
    id: number,
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student/${id}/image`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name UploadBirthCertificateImage
   * @request POST:/api/student/{id}/certificate-image
   */
  uploadBirthCertificateImage = (
    id: number,
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiStudentResponse, any>({
      path: `/api/student/${id}/certificate-image`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name ImportExcel
   * @request POST:/api/student/import
   */
  importExcel = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiStudentImportResult, any>({
      path: `/api/student/import`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name ExportExcel
   * @request GET:/api/student/export
   */
  exportExcel = (params: RequestParams = {}) =>
    this.request<Blob, any>({
      path: `/api/student/export`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Student
   * @name GetAll5
   * @request GET:/api/student/all
   */
  getAll5 = (
    query: {
      filter: StudentFilter;
    },
    params: RequestParams = {},
  ) =>
    this.request<BaseApiListStudentResponse, any>({
      path: `/api/student/all`,
      method: "GET",
      query: query,
      ...params,
    });
}
