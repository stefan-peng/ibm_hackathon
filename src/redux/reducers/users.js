import { actionTypes } from '../actions/actionTypes'

export const users = (state = [{ name: 'test', email: 'test@gmail.com', employeeType_id: 1 }], action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          user: action.user
        }
      ]
    case actionTypes.DELETE_USER:
      return state.filter(user => user.id !== action.id)
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
    default:
      return state
  }
}
