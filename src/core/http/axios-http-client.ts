import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HttpClient, HttpRequestConfig } from "./http-client.interface";
import { HttpError, NetworkError, NotFoundError } from "./http-errors";

export interface AxiosHttpClientOptions {
  baseURL?: string;
  timeout?: number;
}

export class AxiosHttpClient implements HttpClient {
  private readonly client: AxiosInstance;

  constructor(options: AxiosHttpClientOptions = {}) {
    this.client = axios.create({
      baseURL: options.baseURL,
      timeout: options.timeout ?? 15000,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!error.response) {
          return Promise.reject(new NetworkError());
        }
        const { status, data } = error.response;
        const message = data?.message || data?.error || error.message;

        if (status === 404) {
          return Promise.reject(new NotFoundError(message, data?.details));
        }

        return Promise.reject(new HttpError(message, status, data?.details));
      }
    );
  }

  async get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    });
    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: HttpRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    });
    return response.data;
  }

  async put<T>(url: string, data?: unknown, config?: HttpRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    });
    return response.data;
  }

  async patch<T>(url: string, data?: unknown, config?: HttpRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    });
    return response.data;
  }

  async delete<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    });
    return response.data;
  }
}
