import React from 'react';
import { Route, redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, Auth, Logout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth ? (
          <Component {...props} Logout={Logout} />
        ) : (
          <redirect to='/LoginRegister' />
        )
      }
    />
  );
}
export default PrivateRoute;
