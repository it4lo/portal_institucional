import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../utils/auth';

export default function Wrapper({ component: Component, isPrivate = false, ...rest }) {

  const signed = isAuthenticated();

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={Component}/>

}

