import React from "react";
import { Route, Switch } from "react-router-dom";
import Bios from './containers/Bios';
import Calendar from './containers/Calendar';
import Home from "./containers/Home";
import Links from './containers/Links';
import NotFound from "./containers/NotFound";


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/bios" exact component={Bios} />
        <Route path="/links" exact component={Links} />
        <Route component={NotFound} />
    </Switch>;