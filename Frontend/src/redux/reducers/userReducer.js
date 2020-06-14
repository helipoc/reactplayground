import * as constant from "./Actions/constants";

const data = JSON.parse(localStorage.getItem("info"));
const initialState = {
  currentUser: data ? data.user : null,
};
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case constant.LOGGED_IN:
      return { currentUser: action.user };
    case constant.USERS_LOADED:
      return { ...state, users: action.users };
    case constant.LOGOUT:
      return {};
    default:
      return state;
  }
}
