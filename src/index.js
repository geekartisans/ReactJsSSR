import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store, { history } from './store'


hydrate(
  <Provider store={store} >
    <App />    
  </Provider>,
  document.getElementById("root")
);
