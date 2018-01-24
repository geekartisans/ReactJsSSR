import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import routes from 'routes';

import Main from 'containers/Main';
import Page from 'containers/Page';
import Users from 'containers/Users';


export default class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <ul className="Nav">
              <li className="Navitem">
                <Link to="/" className="Navlink">Index</Link>
              </li>
              <li className="Navitem">
                <Link to="/page" className="Navlink">Page</Link>
              </li>
              <li className="Navitem">
                <Link to="/users" className="Navlink">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {
              routes.map((route, key) => (
                <Route {...route} key={key} />
              ))
            }
          </Switch>
      </div>
    );
  }
}

{/* <Route exact path="/" component={Main}/> */}
{/* <Route path="/page" component={Page}/> */}
{/* <Route path="/users" component={Users}/> */}