import React, { Component } from 'react';
import home from './pages/home';
import about from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={home}/>
          <Route path="/about" component={about}/>
        </div>
      </Router>
    );
  }
}

export default App;
