import React, { Component } from 'react';
import { connect } from 'react-redux'
import Routers from 'routes';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers sports={[1,2,3]} />
        {/*
          <div className="App-header">
            <img src={logo} className="App-logo" alt="Logo"/>
          </div>
          <div className="App-body">
          </div> 
        */}
      </div>
    );
  }
}

export default connect(null, null)(App);