import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import reducers from './reducers';
// import { routerMiddleware } from 'react-router-redux'
// import createBrowserHistory from 'history/createBrowserHistory'
// import thunk from 'redux-thunk'
// import rootReducer from './modules'

// export const history = createBrowserHistory()

const initialState = {};
const enhancers = [];
const middleware = [
  // thunk,
  // routerMiddleware(history)
];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  reducers,
  initialState,
  composedEnhancers
);
