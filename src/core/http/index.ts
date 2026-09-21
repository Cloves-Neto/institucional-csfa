import { envConfig } from "../config/env.config";
import { AxiosHttpClient } from "./axios-http-client";
import type { AxiosHttpClientOptions } from "./axios-http-client";
import type { HttpClient } from "./http-client.interface";

export type { HttpClient, HttpRequestConfig } from "./http-client.interface";
export { AxiosHttpClient } from "./axios-http-client";
export { HttpError, NotFoundError, NetworkError } from "./http-errors";
export type { ApiResponse, PaginatedResponse, PaginationMeta } from "./types";

export function createHttpClient(options?: AxiosHttpClientOptions): HttpClient {
  return new AxiosHttpClient({
    baseURL: options?.baseURL ?? envConfig.api.baseURL,
    timeout: options?.timeout ?? envConfig.api.timeoutMs,
  });
}

export const httpClient: HttpClient = createHttpClient();
