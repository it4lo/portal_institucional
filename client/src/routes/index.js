import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from './Route';
import PageHome from '../pages/Home';
import PageBirthdays from '../pages/Birthdays';
import PageCollaborator from '../pages/Collaborator';
import PageAddCollaborator from '../pages/Collaborator/Add';
import PageCodeOfConduct from '../pages/CodeOfConduct';
import PageLogin from '../components/Login'
import RegisterLogin from '../components/Register'
import ResetLogin from '../components/ResetPassword'
import PageVoluntary from '../pages/Voluntary'

const Routes = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={() => <PageHome />} isPrivate/>
      <Route exact path="/voluntary" component={() => <PageVoluntary />} isPrivate/>
      <Route exact path="/codeofconduct" component={() => <PageCodeOfConduct />} isPrivate/>
      <Route exact path="/birthdays" component={() => <PageBirthdays />} isPrivate/>
      <Route exact path="/collaborator" component={() => <PageCollaborator />} isPrivate/>
      <Route exact path="/collaborator/add" component={() => <PageAddCollaborator />} isPrivate/>
      <Route exact path="/login" component={PageLogin} />
      <Route exact path="/register" component={RegisterLogin} />
      <Route exact path="/reset" component={ResetLogin} />
    </Switch>
  </Router>

);

export default Routes;