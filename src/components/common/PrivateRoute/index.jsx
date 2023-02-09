import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ path, component: Component }) {
  const token = localStorage.getItem('token');
  return (
    <Route
      path={path}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};
