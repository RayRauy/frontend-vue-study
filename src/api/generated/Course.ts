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
  BaseApiCourseResponse,
  BaseApiListCourseResponse,
  CourseRequest,
  CourseStatusRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Course<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Course
   * @name GetById7
   * @request GET:/api/course/{id}
   */
  getById7 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name Update2
   * @request PUT:/api/course/{id}
   */
  update2 = (id: number, data: CourseRequest, params: RequestParams = {}) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name Delete2
   * @request DELETE:/api/course/{id}
   */
  delete2 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name SetStatus
   * @request PATCH:/api/course/{id}
   */
  setStatus = (
    id: number,
    data: CourseStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name GetAll2
   * @request GET:/api/course
   */
  getAll2 = (params: RequestParams = {}) =>
    this.request<BaseApiListCourseResponse, any>({
      path: `/api/course`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name Create7
   * @request POST:/api/course
   */
  create7 = (data: CourseRequest, params: RequestParams = {}) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Course
   * @name RestoreUser1
   * @request PATCH:/api/course/{id}/restore
   */
  restoreUser1 = (id: number, params: RequestParams = {}) =>
    this.request<BaseApiCourseResponse, any>({
      path: `/api/course/${id}/restore`,
      method: "PATCH",
      ...params,
    });
}
