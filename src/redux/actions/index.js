import fetch from "cross-fetch";
import { actionTypes } from "./actionTypes";
import { push } from "connected-react-router";

const API = "https://flask-back.us-south.cf.appdomain.cloud";

export function requestLogin(user) {
  return dispatch => {
    dispatch({
      // TODO: login
      type: actionTypes.LOGIN_REQUEST,
      user: user
    });
    dispatch(login());
  };
}

export const login = user => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      user: user
    });
    dispatch(push("/"));
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGOUT_REQUEST
    });
    dispatch(push("/login"));
  };
};

export const requestUsers = filter => ({
  type: actionTypes.REQUEST_USERS,
  filter
});

export const receiveUsers = json => ({
  type: actionTypes.RECEIVE_USERS,
  users: json.data,
  receivedAt: Date.now()
});

let nextUserId = 0;
export const addUser = user => ({
  type: actionTypes.ADD_USER,
  id: nextUserId++,
  user
});

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  id
});

export function removeUser(id) {
  return function(dispatch) {
    return fetch(API + "/action/delete=" + id, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(status =>
        status === "ok"
          ? dispatch(deleteUser(id))
          : console.log("Error: ", status)
      );
  };
}

export const editUser = user => ({
  type: actionTypes.EDIT_USER,
  user
});

export const invalidateUsers = user => ({
  type: actionTypes.INVALIDATE_USERS,
  user
});

export function fetchUsers(filter) {
  return function(dispatch) {
    dispatch(requestUsers(filter));
    return fetch(API + "/api/get_users", {
      mode: "cors"
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(json => dispatch(receiveUsers(json)));
  };
}

export function shouldFetchUsers(state, filter) {
  const users = state.users;
  if (!users) {
    return true;
  } else if (users.isFetching) {
    return false;
  } else {
    return users.didInvalidate;
  }
}

export function fetchUsersIfNeeded(filter) {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState(), filter)) {
      return dispatch(fetchUsers(filter));
    } else {
      return Promise.resolve();
    }
  };
}

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_INTERNS: "SHOW_INTERNS",
  SHOW_HR: "SHOW_HR",
  SHOW_MANAGERS: "SHOW_MANAGERS"
};
