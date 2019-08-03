import { actionTypes } from "../actions/actionTypes";

export const employeeTypes = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DO_ADD_EMPLOYEETYPES:
      return {
        ...state,
        items: [...state.items, action.siteLocation]
      };
    case actionTypes.DO_DELETE_EMPLOYEETYPES:
      return {
        ...state,
        items: state.items.filter(siteLocation => siteLocation.ID !== action.id)
      };
    case actionTypes.DO_EDIT_EMPLOYEETYPES:
      return state;
    case actionTypes.DO_INVALIDATE_EMPLOYEETYPES:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case actionTypes.REQUEST_FETCH_EMPLOYEETYPES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.employeeTypes,
        lastUpdated: action.receivedAt
      });
    case actionTypes.DO_RECEIVE_EMPLOYEETYPES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.employeeTypes,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
