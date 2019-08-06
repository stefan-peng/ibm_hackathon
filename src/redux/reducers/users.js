import { actionTypes } from "../actions/actionTypes";

export const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DO_ADD_USER:
      return {
        ...state,
        items: [...state.items, action.user]
      };
    case actionTypes.DO_DELETE_USER:
      return {
        ...state,
        items: state.items.filter(user => user.ID !== action.id)
      };
    case actionTypes.DO_EDIT_USER:
      return state;
    case actionTypes.DO_INVALIDATE_USERS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case actionTypes.REQUEST_FETCH_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      });
    case actionTypes.DO_RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
