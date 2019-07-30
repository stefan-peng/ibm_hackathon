let nextUserId = 0
export const addUser = user => ({
  type: 'ADD_USER',
  id: nextUserId++,
  user
})

export const deleteUser = user => ({
  type: 'DELETE_USER',
  user
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_INTERNS: 'SHOW_INTERNS',
  SHOW_HR: 'SHOW_HR',
  SHOW_MANAGERS: 'SHOW_MANAGERS'
}
