import { actionTypes } from "../actions/actionTypes";
// import userConst from "../../const"

const initialState = {
  isAuthenticated: true,
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
        // isAdmin: action.user.ID === userConst.EmployeeType_Ids.HR,
        isAuthenticated: true,
        user: action.user
      });
    case actionTypes.DO_LOGIN_FAILED:
      return Object.assign({}, state, {});
    case actionTypes.DO_LOGOUT:
      return Object.assign({}, state, { isAuthenticated: false });
    default:
      return state;
  }
};
