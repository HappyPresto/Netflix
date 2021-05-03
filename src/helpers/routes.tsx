import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Browse } from '../pages';

type IsUserRedirectOption = {
    user: any,
    loggedInPath: any,
    path: any,
    children?: any,
}

type ProtectedRouteOption = {
    user: any, 
    path: any,
    children: any, 

}
  
export function IsUserRedirect({ user, loggedInPath, children, ...rest }:IsUserRedirectOption) {
    return (
        <Route 
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }
                else if (user) {
                    return (
                        <Browse />
                        // <Redirect 
                        //     to={{
                        //         pathname: loggedInPath
                        //     }} 
                        // />
                    );
                }
                return null;
            }}
        />
    )
};

export function ProtectedRoute({ user, children, ...rest}:ProtectedRouteOption) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    )
}