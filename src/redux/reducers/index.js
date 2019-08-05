import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { auth } from "./auth";
import { employeeTypes } from "./employeeTypes";
import { siteLocations } from "./siteLocations";
import { users } from "./users";
import visibilityFilter from "./visibilityFilter";

export default history =>
  combineReducers({
    router: connectRouter(history),
    users,
    visibilityFilter,
    employeeTypes,
    siteLocations,
    auth
  });