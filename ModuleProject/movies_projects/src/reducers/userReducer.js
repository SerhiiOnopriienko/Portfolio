import { LOAD_USER_NAME } from "../actions/user";

const initialState = {
  userName: {},
};

export const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_NAME:
      return {
        ...state,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};
