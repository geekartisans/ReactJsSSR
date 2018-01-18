import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reducers from './reducers';
// import store, { history } from './store';


const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState)
delete window.__PRELOADED_STATE__;

hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
