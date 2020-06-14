import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import * as api from "../api/posts";
import { getUsers, subscribe } from "../api/users";

export default function* watcher() {
  yield takeEvery("LOAD_POSTS", fetchPosts);
  yield takeEvery("DELETE_POST", deletePost);
  yield takeLatest("LOAD_USERS", loadUsers);
  yield takeEvery("ADD_FRIEND", addFriend);
  yield takeEvery("LOAD_FRIENDS_POSTS", loadPosts);
}

function* fetchPosts() {
  const posts = yield call(api.getPosts);
  yield put({ type: "POST_LOADED", posts });
}
function* deletePost(action) {
  yield put({ type: "POST_DELETED", id: action.id });
  yield call(api.deletePost, action.id);
}
function* loadUsers() {
  const users = yield call(getUsers);
  yield put({ type: "USERS_LOADED", users });
}
function* addFriend(action) {
  yield call(subscribe, action.id);
  yield put({ type: "LOAD_USERS" });
}

function* loadPosts() {
  const posts = yield call(api.friendposts);
  yield put({ type: "FRIEND_POSTS_LOADED", friendposts: posts });
}
