const users = (state = [], action) => {
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
    default:
      return state
  }
}

export default users
