import fetch from 'cross-fetch'
import { ADD_USER } from '../actionTypes'

const API = 'https://hackathonnodejsbackend.us-south.cf.appdomain.cloud/command';

export const requestUsers = filter => ({
  type: 'REQUEST_USERS',
  filter
})

export const receiveUsers = (filter, json) => ({
  type: 'RECEIVE_USERS',
  filter,
  users: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

let nextUserId = 0
export const addUser = content => ({
  type: ADD_USER,
  payload: {
    id: nextUserId++,
    content
  }
})

export const deleteUser = user => ({
  type: 'DELETE_USER',
  user
})

export const invalidateUser = user => ({
  type: 'INVALIDATE_USER',
  user
})

export function fetchUsers(filter) {
  return function(dispatch) {
    dispatch(requestUsers(filter))
    return fetch(API).then(
      response => response.json(),
      error => console.log('Error: ', error)
    )
      .then(json =>
        dispatch(receiveUsers(filter, json)))
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
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_INTERNS: 'SHOW_INTERNS',
  SHOW_HR: 'SHOW_HR',
  SHOW_MANAGERS: 'SHOW_MANAGERS'
}
