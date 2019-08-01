import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { users } from "./users";
import { auth } from "./auth";
import visibilityFilter from "./visibilityFilter";

export default (history) => combineReducers({
  router: connectRouter(history),
  users,
  visibilityFilter,
  auth
});
