import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap"


export default ({ component: C, props: cProps, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            cProps.isAdmin
                ? <C {...props} {...cProps} />
                : <Alert>You do not have permission to view this page.</Alert>}
    />;
