import fetch from "cross-fetch";
import { actionTypes } from "./actionTypes";
import { push } from "connected-react-router";

const API = "https://flask-back.us-south.cf.appdomain.cloud";

export const requestLogin = user => {
  return dispatch => {
    dispatch({
      // TODO: login
      type: actionTypes.LOGIN_REQUEST,
      user: user
    });
    dispatch(login());
  };
};

export const login = user => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGIN,
      user: user
    });
    dispatch(push("/"));
  };
};

export const requestLogout = user => {
  return dispatch => {
    dispatch({
      // TODO: logout
      type: actionTypes.LOGOUT_REQUEST,
      user: user
    });
    dispatch(logout());
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOGOUT
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

export const addUser = user => dispatch =>
  fetch(API + "/add", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: { user: user } })
  })
    .then(response => response.json(), error => console.log("Error: ", error))
    .then(status =>
      status === "ok" ? dispatch(fetchUsers) : console.log("Error: ", status)
    );

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  id
});

export const requestDeleteUser = id => dispatch =>
  fetch(API + "/delete=" + id, {
    method: "DELETE",
    mode: "cors"
  })
    .then(response => response.json(), error => console.log("Error: ", error))
    .then(status =>
      status === "ok"
        ? dispatch(deleteUser(id))
        : console.log("Error: ", status)
    );

export const editUser = user => ({
  type: actionTypes.EDIT_USER,
  user
});

export const invalidateUsers = user => ({
  type: actionTypes.INVALIDATE_USERS,
  user
});

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(requestUsers());
    return fetch(API + "/api/get_users", {
      mode: "cors"
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(json => dispatch(receiveUsers(json)));
  };
};

export const shouldFetchUsers = state => {
  const users = state.users;
  if (!users) {
    return true;
  } else if (users.isFetching) {
    return false;
  } else {
    return users.didInvalidate;
  }
};

export const fetchUsersIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    } else {
      return Promise.resolve();
    }
  };
};

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
