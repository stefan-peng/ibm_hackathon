import fetch from "cross-fetch";
import { actionTypes } from "./actionTypes";
import { push } from "connected-react-router";
import { API } from "../../const";

export const requestFetchAll = () => {
  return function(dispatch) {
    dispatch(requestFetchEmployeeTypes());
    dispatch(requestFetchSiteLocations());
    dispatch(requestFetchUsers());
  };
};

export const requestFetchEmployeeTypes = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_FETCH_EMPLOYEETYPES
    });
    fetch(API + "/api/get_employeetype", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response
          ? dispatch(doReceiveEmployeeTypes(response.data))
          : console.log("Error: ", response)
      );
  };
};

export const doReceiveEmployeeTypes = employeeTypes => dispatch => {
  dispatch({
    type: actionTypes.DO_RECEIVE_EMPLOYEETYPES,
    employeeTypes: employeeTypes
  });
};

export const requestFetchSiteLocations = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_FETCH_SITELOCATIONS
    });
    fetch(API + "/api/get_sitelocation", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response
          ? dispatch(doReceiveSiteLocations(response))
          : console.log("Error: ", response)
      );
  };
};

export const doReceiveSiteLocations = siteLocations => {
  return function(dispatch) {
    dispatch({
      type: actionTypes.DO_RECEIVE_SITELOCATIONS,
      siteLocations: siteLocations.data
    });
  };
};

// TODO: verify login works
export const requestLogin = credentials => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_LOGIN
    });
    fetch(API + "/login", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: { credentials: credentials } })
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response.status === "ok"
          ? dispatch(doLogin(response.token))
          : dispatch(doLoginFailed(response))
      );
  };
};

export const doLogin = user => {
  return dispatch => {
    dispatch({
      type: actionTypes.DO_LOGIN,
      user: user
    });
    dispatch(push("/"));
  };
};

export const doLoginFailed = response => {
  return dispatch => {
    dispatch({
      type: actionTypes.DO_LOGIN_FAILED,
      response: response
    });
    dispatch(push("/login"));
  };
};

// TODO: verify logout works
export const requestLogout = token => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_LOGOUT
    });
    fetch(API + "/logout", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: { token: token } })
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response.status === "ok" ? dispatch(doLogout()) : console.log(response)
      );
    // dispatch(doLogout());
  };
};

export const doLogout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DO_LOGOUT
    });
    dispatch(push("/login"));
  };
};

export const doFetchUsersSuccess = json => ({
  type: actionTypes.DO_FETCH_USERS_SUCCESS,
  users: json.data,
  receivedAt: Date.now()
});

export const doFetchUsersFail = () => ({
  type: actionTypes.DO_FETCH_USERS_FAIL
});

export const requestAddUser = user => {
  return function(dispatch) {
    dispatch({ type: actionTypes.REQUEST_ADD_USER, user: user });
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
      .then(
        response =>
          response.status === "ok"
            ? dispatch(doAddUser(response.data.user))
            : console.log("Error: ", response)
        // TODO: handle email taken
      );
  };
};

export const doAddUser = user => ({
  type: actionTypes.DO_ADD_USER,
  user: user
});

export const doDeleteUser = id => ({
  type: actionTypes.DO_DELETE_USER,
  id
});

export const requestDeleteUser = id => {
  return function(dispatch) {
    dispatch({ type: actionTypes.REQUEST_DELETE_USER, id: id });
    fetch(API + "/delete=" + id, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response.status === "ok"
          ? dispatch(doDeleteUser(id))
          : console.log("Error: ", response)
      );
  };
};

export const doEditUser = user => ({
  type: actionTypes.DO_EDIT_USER,
  user
});

export const doInvalidateUsers = user => ({
  type: actionTypes.DO_INVALIDATE_USERS,
  user
});

export const requestFetchUsers = () => {
  return function(dispatch) {
    dispatch({ type: actionTypes.REQUEST_FETCH_USERS });
    return fetch(API + "/api/get_users", {
      mode: "cors"
    })
      .then(response => response.json(), error => console.log("Error: ", error))
      .then(response =>
        response
          ? dispatch(doFetchUsersSuccess(response))
          : dispatch(doFetchUsersFail(response))
      );
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
      return dispatch(requestFetchUsers());
    } else {
      return Promise.resolve();
    }
  };
};

export const doSetEmployeeTypeFilter = filter => ({
  type: actionTypes.DO_SET_EMPLOYEETYPE_FILTER,
  filter
});

export const doSetSiteLocationFilter = filter => ({
  type: actionTypes.DO_SET_SITELOCATION_FILTER,
  filter
});
