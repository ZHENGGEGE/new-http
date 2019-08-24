export type method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'PUT'
  | 'put'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: method
  data?: any
  params?: any
}
