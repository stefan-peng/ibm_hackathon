import { actionTypes } from "../actions/actionTypes";

export const siteLocations = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DO_ADD_SITELOCATIONS:
      return {
        ...state,
        items: [...state.items, action.siteLocation]
      };
    case actionTypes.DO_DELETE_SITELOCATIONS:
      return {
        ...state,
        items: state.items.filter(siteLocation => siteLocation.ID !== action.id)
      };
    case actionTypes.DO_EDIT_SITELOCATIONS:
      return state;
    case actionTypes.DO_INVALIDATE_SITELOCATIONS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case actionTypes.REQUEST_FETCH_SITELOCATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        items: action.siteLocations,
      });
    case actionTypes.DO_RECEIVE_SITELOCATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.siteLocations,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
