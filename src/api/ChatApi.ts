import { BaseAPI } from "./BaseApi";

export default class ChatAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(title: string) {
    const options = {
      data: {
        title: title,
      },
    };
    return this.http.post("", options);
  }

  request() {
    return this.http.get("");
  }

  delete(chatId: string) {
    return this.http.delete("", { data: { chatId: chatId } });
  }

  getUsers(id: number) {
    return this.http.get(`/chats/${id}/users`);
  }

  addUsers(id: number, users: number[]) {
    return this.http.put("/users", { data: { users: users, chatId: id } });
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete("/users", { data: { users: users, chatId: id } });
  }
}
