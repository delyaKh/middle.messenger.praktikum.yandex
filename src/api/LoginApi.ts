import { BaseAPI } from "./BaseApi";

export class LoginApi extends BaseAPI {
  constructor() {
    super("/login");
  }

  request(userId: number) {
    return this.http.get(`/${userId}`);
  }

  create = undefined;
  delete = undefined;
  read = undefined;
  update = undefined;
}
