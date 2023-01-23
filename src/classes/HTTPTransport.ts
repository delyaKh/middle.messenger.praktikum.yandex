enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type TRequestData = Record<string, string | number>;
type TRequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: TRequestData;
};

function queryStringify(data: TRequestData) {
  if (!data) return "";
  return Object.entries(data).reduce((acc, [key, value], index, arr) => {
    return `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`;
  }, "?");
}

export default class HTTPTransport {
  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  patch = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PATCH });
  };

  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: TRequestOptions) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000,
    } = options;

    const query =
      method === METHODS.GET ? queryStringify(data as TRequestData) : "";
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url + query);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        if (xhr.status >= 300) {
          reject(xhr);
        } else {
          resolve(xhr);
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
