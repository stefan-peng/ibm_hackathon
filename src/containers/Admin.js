import React, { Fragment } from "react";
import AddUser from "../components/AddUser";
import VisibleUserList from "../containers/VisibleUserList";

const Admin = () => (
  <Fragment>
    <AddUser />
    <br />
    <VisibleUserList />
  </Fragment>
);

export default Admin;
