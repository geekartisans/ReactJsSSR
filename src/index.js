import React from 'react'
import { hydrate } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'


import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Main from './containers/Main';
import Page from './containers/Page';
import App from './containers/App';
import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const logger =  createLogger();

// Get preloaded state from server
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(
    middleware,
    logger,
  )
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

hydrate(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)