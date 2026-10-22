export interface ApiResponse<T> {
  status: number;
  title: string;
  timestamp: number;
  data: T;
}

export interface Pagination {
  empty: boolean;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface ApiPaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: Pagination;
}
