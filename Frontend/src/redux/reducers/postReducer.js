function postReducer(state = {}, action) {
  switch (action.type) {
    case "ADDED_POST":
      return { ...state, done: true };
    case "POST_LOADED":
      return { ...state, posts: [...action.posts] };
    case "FRIEND_POSTS_LOADED":
      return { ...state, FriendPosts: action.friendposts };
    case "POST_DELETED":
      return {
        ...state,
        posts: [...state.posts.filter((p) => p._id !== action.id)],
      };
    case "UNADD_POST":
      return { ...state, done: false };

    default:
      return state;
  }
}

export default postReducer;
