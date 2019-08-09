import React from 'react'
import { Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import Home from '../containers/Home'
import { Login } from '../containers/Login'
import NotFound from '../containers/NotFound'
import Signup from '../containers/Signup'
import AdminRoute from './AdminRoute'
import VisibleUserList from '../containers/VisibleUserList';

export default ({ childProps }) =>
  <Switch>
    <AuthenticatedRoute path='/' exact component={Home} props={childProps} />
    <UnauthenticatedRoute path='/login' exact component={Login} props={childProps} />
    <UnauthenticatedRoute path='/signup' exact component={Signup} props={childProps} />
    <AuthenticatedRoute path='/allusers' exact component={VisibleUserList} props={childProps} />
    <AuthenticatedRoute component={NotFound} />
  </Switch>
