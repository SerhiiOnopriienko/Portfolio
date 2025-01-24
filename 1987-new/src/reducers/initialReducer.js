import { LOAD_IDs, LOAD_POSTS } from "../actions/posts";

const initialState = {
  id: [],
  posts: [],
};

export const initialReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_IDs:
      return {
        ...state,
        id: [...action.payload.id].slice(0, 9),
      };
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload.posts],
      };
    default:
      return state;
  }
};
