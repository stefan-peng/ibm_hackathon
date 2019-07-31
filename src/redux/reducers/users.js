const initialState = {
  isFetching: false, didInvalidate: false, items: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.id)
    case 'INVALIDATE_USER':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'REQUEST_USERS':
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
