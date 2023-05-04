import { queryStringify } from "../helpers/helpers";

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type TRequestData = Record<string, string | number | number[]>;
type TRequestOptions = {
  method: Method;
  sendingjson?: boolean;
  data?: any;
};
type HTTPMethod = (url: string, options?: TRequestOptions) => Promise<unknown>;

// function queryStringify(data: TRequestData) {
//   if (!data) return "";
//   return Object.entries(data).reduce((acc, [key, value], index, arr) => {
//     return `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`;
//   }, "?");
// }

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get<Response>(path = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.POST,
      data,
    });
  }

  put<Response = void>(
    path: string,
    data: unknown,
    sendingjson?: boolean
  ): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      {
        method: Method.PUT,
        data,
      },
      sendingjson
    );
  }

  patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PATCH,
      data,
    });
  }

  delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.DELETE,
      data,
    });
  }

  private request<Response>(
    url: string,
    options: TRequestOptions = { method: Method.GET },
    sendingjson?: boolean
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onload = () => {
        if (xhr.status >= 300) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
