import React, { Component } from 'react';
import range from 'lodash/range';
import logo from './logo.svg';
import './App.css';
import Row from '../Row';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="Logo"/> */}
        </div>
        <div className="App-body">
          {
            range(50).map((row) => (
              <Row
                key={row}
                name={`Row-${row}`}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
