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

export interface UserRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 1 */
  password: string;
  /** @minLength 1 */
  name: string;
  profile?: string;
  /** @format int64 */
  roleId?: number;
}

export interface BaseApiUserResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: UserResponse;
}

export interface UserResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  email?: string;
  enabled?: boolean;
  activeTokenId?: string;
  profile?: string;
}

export interface TeacherRequest {
  /** @minLength 1 */
  name: string;
  gender?: string;
  /** @format date */
  dateOfBirth?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  phone?: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  address?: string;
  status?: boolean;
}

export interface BaseApiTeacherResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: TeacherResponse;
}

export interface TeacherResponse {
  name?: string;
  gender?: string;
  /** @format date */
  dateOfBirth?: string;
  phone?: string;
  address?: string;
  status?: boolean;
  /** @format int64 */
  id?: number;
}

export interface StudentRequest {
  studentNo?: string;
  fullNameKh?: string;
  fullNameEn?: string;
  birthCertificate?: string;
  image?: string;
  gender?: string;
  /** @format date */
  startDate?: string;
  /** @format date */
  dateOfBirth?: string;
  placeOfBirth?: string;
  currentAddress?: string;
  status?: string;
  note?: string;
}

export interface BaseApiStudentResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: StudentResponse;
}

export interface StudentResponse {
  /** @format int32 */
  id?: number;
  studentNo?: string;
  fullNameKh?: string;
  fullNameEn?: string;
  birthCertificate?: string;
  image?: string;
  gender?: string;
  /** @format date */
  startDate?: string;
  /** @format date */
  dateOfBirth?: string;
  placeOfBirth?: string;
  currentAddress?: string;
  status?: string;
  note?: string;
  /** @format date-time */
  createdAt?: string;
  updatedBy?: string;
}

export interface StudentEnrollmentRequest {
  /** @format int64 */
  studentId?: number;
  /** @format int64 */
  courseId?: number;
  /** @format date */
  enrollmentDate?: string;
  status?: boolean;
}

export interface BaseApiStudentEnrollmentResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: StudentEnrollmentResponse;
}

export interface StudentEnrollmentResponse {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  studentId?: number;
  studentNameKh?: string;
  studentNameEn?: string;
  /** @format int64 */
  courseId?: number;
  courseName?: string;
  /** @format date */
  enrollmentDate?: string;
  status?: boolean;
}

export interface RoleRequest {
  /** @minLength 1 */
  name: string;
  /**
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /** @format int64 */
  permissionId?: number;
}

export interface BaseApiRoleResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: RoleResponse;
}

export interface RoleResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
}

export interface PermissionRequest {
  /** @minLength 1 */
  name: string;
  /**
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
}

export interface BaseApiPermissionResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: PermissionResponse;
}

export interface PermissionResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
}

export interface LevelTypeRequest {
  /** @minLength 1 */
  name: string;
}

export interface BaseApiLevelTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: LevelTypeResponse;
}

export interface LevelTypeResponse {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface CourseRequest {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  startTime: string;
  /** @minLength 1 */
  endTime: string;
  tuitionFee: number;
  /** @format int64 */
  levelTypeId?: number;
  /** @format int64 */
  courseTypeId?: number;
}

export interface BaseApiCourseResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: CourseResponse;
}

export interface CourseResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  startTime?: string;
  endTime?: string;
  /** @format int64 */
  duration?: number;
  tuitionFee?: number;
  status?: boolean;
  /** @format int64 */
  levelTypeId?: number;
  levelTypeName?: string;
  /** @format int64 */
  courseTypeId?: number;
  courseTypeName?: string;
}

export interface CourseTypeRequest {
  /** @minLength 1 */
  name: string;
}

export interface BaseApiCourseTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: CourseTypeResponse;
}

export interface CourseTypeResponse {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface TeacherImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface BaseApiStudentImportResult {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: StudentImportResult;
}

export interface StudentImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface RoleImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface PermissionImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface LevelTypeImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface CourseTypeImportResult {
  /** @format int32 */
  totalRows?: number;
  /** @format int32 */
  imported?: number;
  /** @format int32 */
  skipped?: number;
  errors?: string[];
}

export interface CaptchaRequest {
  /** @minLength 1 */
  captchaId: string;
  /** @minLength 1 */
  captchaData: string;
}

export interface LoginRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 1 */
  password: string;
  captchaId?: string;
  captchaData?: string;
}

export interface AuthResponse {
  token?: string;
  type?: string;
  user?: UserResponse;
}

export interface UserSecurityStatusRequest {
  enabled?: boolean;
  accountNotLocked?: boolean;
  accountNotExpired?: boolean;
  credentialsNotExpired?: boolean;
}

export interface CourseStatusRequest {
  status?: boolean;
}

export interface UserFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
  nickname?: string;
  enabled?: boolean;
}

export interface BaseApiPaginationListUserResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: UserResponse[];
}

export interface PaginationDTO {
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int64 */
  totalElements?: number;
  /** @format int64 */
  numberOfElements?: number;
  empty?: boolean;
  last?: boolean;
  first?: boolean;
}

export interface BaseApiListUserResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: UserResponse[];
}

export interface TeacherFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
  gender?: string;
  /** @format date */
  dateOfBirth?: string;
  phone?: string;
  address?: string;
  status?: boolean;
}

export interface BaseApiPaginationListTeacherResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: TeacherResponse[];
}

export interface BaseApiListTeacherResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: TeacherResponse[];
}

export interface StudentFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  studentNo?: string;
  fullNameKh?: string;
  fullNameEn?: string;
  gender?: string;
  /** @format date */
  dateOfBirth?: string;
  currentAddress?: string;
  status?: string;
}

export interface BaseApiPaginationListStudentResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: StudentResponse[];
}

export interface BaseApiListStudentResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: StudentResponse[];
}

export interface BaseApiListStudentEnrollmentResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: StudentEnrollmentResponse[];
}

export interface RoleFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
  description?: string;
}

export interface BaseApiListRoleResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: RoleResponse[];
}

export interface BaseApiPaginationListRoleResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: RoleResponse[];
}

export interface PermissionFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
  description?: string;
}

export interface BaseApiListPermissionResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: PermissionResponse[];
}

export interface LevelTypeFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
}

export interface BaseApiPaginationListLevelTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: LevelTypeResponse[];
}

export interface BaseApiListLevelTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: LevelTypeResponse[];
}

export interface BaseApiListCourseResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: CourseResponse[];
}

export interface CourseTypeFilter {
  sortBy?: string;
  direction?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  name?: string;
}

export interface BaseApiPaginationListCourseTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  pagination?: PaginationDTO;
  data?: CourseTypeResponse[];
}

export interface BaseApiListCourseTypeResponse {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: CourseTypeResponse[];
}

export interface CaptchaResponse {
  captchaId?: string;
  imageBase64?: string;
  enabled?: boolean;
}

export interface BaseApiVoid {
  status?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
  data?: any;
}
