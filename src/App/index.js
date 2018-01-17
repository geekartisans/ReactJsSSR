import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Logo"/>
        </div>
        <div className="App-body">
        </div>
      </div>
    );
  }
}


export default connect(null, null)(App);