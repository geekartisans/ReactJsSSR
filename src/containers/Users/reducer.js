import { REQUEST_USERS, SUCCESS_USERS  } from './actions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_USERS: 
      return action.users;
    default:
      return state;
  }
}
