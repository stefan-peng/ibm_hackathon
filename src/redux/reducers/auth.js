import { actionTypes } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: true,
  isAdmin: true
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        isAuthenticating: true,
        user: action.user
      };
    case actionTypes.LOGIN:
      return {
        isAdmin: true,
        isAuthenticated: true,
        user: action.user
      };
    case actionTypes.LOGIN_FAILURE:
      return {};
    case actionTypes.LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};
