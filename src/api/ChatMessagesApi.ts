import { BaseAPI } from "./BaseApi";

export default class ChatAPI extends BaseAPI {
  constructor() {
    super("/chatMessages");
  }

  request(id: number) {
    return this.http.get(`/${id}`);
  }
}
