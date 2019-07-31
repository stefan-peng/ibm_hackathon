import { actionTypes } from '../actions/actionTypes'
//items: [{ NAME: 'test', EMAIL: 'test@gmail.com', EMPLOYEETYPE_ID: 1 }]
export const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        items: [
          ...state.items,
          action.user
        ]
      }
    case actionTypes.DELETE_USER:
      return {
        ...state,
        items: state.items.filter(user => user.ID !== action.id)
      }
    case actionTypes.EDIT_USER:
      return state
    case actionTypes.INVALIDATE_USER:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case actionTypes.REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      })
    case actionTypes.RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
