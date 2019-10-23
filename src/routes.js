import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPg from './pages/MainPg';
import AddFacebook from './pages/AddFacebook';
import HourComp from './services/HourComp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPg}/>  
        <Route path="/pages/AddFacebook" component={AddFacebook} />
        <Route path="/services/HourComp" component={HourComp} />
      </Switch>
    </BrowserRouter>
  );
}