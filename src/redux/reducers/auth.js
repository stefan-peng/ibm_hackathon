import { actionTypes } from "../actions/actionTypes";
// import userConst from "../../const"

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  isAdmin: true
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    case actionTypes.DO_LOGIN:
      return Object.assign({}, state, {
        // TODO: check if user is admin
        isAuthenticated: true,
        isAuthenticating: false,
        cookie: action.cookie
      });
    case actionTypes.DO_LOGIN_FAILED:
      return Object.assign({}, state, {});
    case actionTypes.DO_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
