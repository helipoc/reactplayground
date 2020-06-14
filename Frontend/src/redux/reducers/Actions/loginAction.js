import * as constant from "./constants";
import * as api from "../../../api/login";

export function loginSuccess(user) {
  return { type: constant.LOGGED_IN, user };
}

export function Logout() {
  api.Logout();
  return { type: constant.LOGOUT };
}
