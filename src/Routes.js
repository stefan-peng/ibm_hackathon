import React from "react";
import { Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Bios from './containers/Bios';
import CalendarPage from './containers/Calendar';
import Home from "./containers/Home";
import Links from './containers/Links';
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import Admin from "./containers/Admin"
import AdminRoute from "./components/AdminRoute";


export default ({ childProps }) =>
    <Switch>
        <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
        <AuthenticatedRoute path="/calendar" exact component={CalendarPage} props={childProps} />
        <AuthenticatedRoute path="/bios" exact component={Bios} props={childProps} />
        <AuthenticatedRoute path="/links" exact component={Links} props={childProps} />
        <AdminRoute path="/admin" exact component={Admin} props={childProps} />
        <AuthenticatedRoute component={NotFound} />
    </Switch>;