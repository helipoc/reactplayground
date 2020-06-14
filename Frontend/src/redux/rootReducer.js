import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  postState: postReducer,
});

export default rootReducer;
