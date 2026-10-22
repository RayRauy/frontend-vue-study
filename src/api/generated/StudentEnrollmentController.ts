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
  BaseApiListStudentEnrollmentResponse,
  BaseApiStudentEnrollmentResponse,
  StudentEnrollmentRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class StudentEnrollmentController<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags student-enrollment-controller
   * @name GetById3
   * @request GET:/api/student-enrollment/{id}
   */
  getById3 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiStudentEnrollmentResponse, any>({
      path: `/api/student-enrollment/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags student-enrollment-controller
   * @name Update1
   * @request PUT:/api/student-enrollment/{id}
   */
  update1 = (
    id: number,
    data: StudentEnrollmentRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiStudentEnrollmentResponse, any>({
      path: `/api/student-enrollment/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags student-enrollment-controller
   * @name Delete1
   * @request DELETE:/api/student-enrollment/{id}
   */
  delete1 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiStudentEnrollmentResponse, any>({
      path: `/api/student-enrollment/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags student-enrollment-controller
   * @name GetAll
   * @request GET:/api/student-enrollment
   */
  getAll = (params: RequestParams = {}) =>
    this.request<BaseApiListStudentEnrollmentResponse, any>({
      path: `/api/student-enrollment`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags student-enrollment-controller
   * @name Create3
   * @request POST:/api/student-enrollment
   */
  create3 = (data: StudentEnrollmentRequest, params: RequestParams = {}) =>
    this.request<BaseApiStudentEnrollmentResponse, any>({
      path: `/api/student-enrollment`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
