import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from '../Row';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Logo"/>
        </div>
        <div className="App-body">
          {
            [{name:'Row 1'}].map((row) => (
              <Row {...row} />
            ))
          }
        </div>
      </div>
    );
  }
}
