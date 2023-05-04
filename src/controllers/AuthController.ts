import { AuthApi, SigninData, SignupData } from "../api/AuthApi";
import { router } from "../common/Router";
import { store } from "../common/Store";

class AuthController {
  private _api: AuthApi;

  constructor() {
    this._api = new AuthApi();
  }

  signup(data: SignupData) {
    this._api
      .signup(data)
      .then(() => {
        router.go("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signin(data: SigninData) {
    this._api
      .signin(data)
      .then(() => {
        router.go("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    this._api
      .logout()
      .then(() => {
        router.go("/signup");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchUser() {
    store.set("user.isLoading", true);
    return this._api
      .getUser()
      .then((user) => {
        store.set("user.data", user);
      })
      .catch(() => {
        store.set("user.hasError", true);
      })
      .finally(() => {
        store.set("user.isLoading", false);
      });
  }
}

export const authController = new AuthController();
