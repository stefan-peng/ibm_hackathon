import fetch from 'cross-fetch'
import { actionTypes } from './actionTypes'

const API = 'https://flask-back.us-south.cf.appdomain.cloud/api/get_all';

export const requestUsers = filter => ({
  type: actionTypes.REQUEST_USERS,
  filter
})

export const receiveUsers = json => ({
  type: actionTypes.RECEIVE_USERS,
  users: json.data,
  receivedAt: Date.now()
})

let nextUserId = 0
export const addUser = user => ({
  type: actionTypes.ADD_USER,
  id: nextUserId++,
  user
})

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  id
})

export const editUser = user => ({
  type: actionTypes.EDIT_USER,
  user
})

export const invalidateUser = user => ({
  type: actionTypes.INVALIDATE_USER,
  user
})

export function fetchUsers(filter) {
  return function (dispatch) {
    dispatch(requestUsers(filter))
    return fetch(API, {
      mode: 'cors'
    }).then(
      response => response.json(),
      error => console.log('Error: ', error)
    )
      .then(json =>
        dispatch(receiveUsers(json)
        )
      )
  }
}

export function shouldFetchUsers(state, filter) {
  const users = state.users
  if (!users) {
    return true
  } else if (users.isFetching) {
    return false
  } else {
    return users.didInvalidate
  }
}

export function fetchUsersIfNeeded(filter) {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState(), filter)) {
      return dispatch(fetchUsers(filter))
    } else {
      return Promise.resolve()
    }
  }
}

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_INTERNS: 'SHOW_INTERNS',
  SHOW_HR: 'SHOW_HR',
  SHOW_MANAGERS: 'SHOW_MANAGERS'
}
