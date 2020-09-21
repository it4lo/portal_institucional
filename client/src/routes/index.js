import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from './Route';
import PageHome from '../pages/Home';
/* import PageBirthdays from '../pages/Birthdays';
import PageCodeOfConduct from '../pages/CodeOfConduct';
import PageVoluntary from '../pages/Voluntary'; */

import PageAddCollaborator from '../pages/Colls/Add';

import PageCollaborator from '../pages/Colls';
import PageLogin from '../components/Login';
import RegisterLogin from '../pages/Register';
import ResetLogin from '../components/ResetPassword';

import { scheme } from '../config';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <PageHome scheme={scheme} />} isPrivate />
      <Route exact path="/collaborator" component={() => <PageCollaborator scheme={scheme} />} isPrivate/>
      <Route exact path="/collaborator/add" component={() => <PageAddCollaborator scheme={scheme} />} isPrivate/>
      <Route exact path="/login" component={PageLogin} />
      <Route exact path="/register" component={RegisterLogin} />
      <Route exact path="/reset" component={ResetLogin} />
      {/* <Route exact path="/voluntary" component={() => <PageVoluntary />} isPrivate /> */}
      {/* <Route exact path="/codeofconduct" component={() => <PageCodeOfConduct />} isPrivate /> */}
      {/* <Route exact path="/birthdays" component={() => <PageBirthdays />} isPrivate /> */}
    </Switch>
  </Router>
);

export default Routes;