import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import app from './app';
import home from './pages/home';
import about from './pages/about';

export default (
  <Router history={history}>
    <Route path="/" component={app}>
      <IndexRoute component={home}/>
    </Route>
  </Router>
);
