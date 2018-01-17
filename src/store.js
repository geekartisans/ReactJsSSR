import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import rootReducer from './modules'

export const history = createBrowserHistory()

const initialState = {};
const enhancers = [];
const middleware = [
  // thunk,
  routerMiddleware(history)
];
const rootReducer = combineReducers({
  routing: routerReducer,
});

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store