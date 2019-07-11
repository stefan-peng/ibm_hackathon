import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Bios from './containers/Bios';
import Calendar from './containers/Calendar';
import Home from "./containers/Home";
import Links from './containers/Links';
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        <AppliedRoute path="/calendar" exact component={Calendar} props={childProps} />
        <AppliedRoute path="/bios" exact component={Bios} props={childProps} />
        <AppliedRoute path="/links" exact component={Links} props={childProps} />
        <AppliedRoute component={NotFound} />
    </Switch>;