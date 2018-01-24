import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import users from 'containers/Users/reducer';


export default combineReducers({
  router: routerReducer,
  users,
});
