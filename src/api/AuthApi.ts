import { BaseAPI } from "./BaseApi";

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SigninData {
  login: string;
  password: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class AuthApi extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signup(data: SignupData) {
    return this.http.post("/signup", data);
  }

  signin(data: SigninData) {
    return this.http.post("/signin", data);
  }

  logout() {
    return this.http.post("/logout");
  }

  getUser() {
    return this.http.get<User>("/user");
  }

  create = undefined;
  delete = undefined;
  read = undefined;
  update = undefined;
}
