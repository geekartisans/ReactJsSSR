import fetch from 'isomorphic-fetch';

export const REQUEST_USERS = '@containsers/Users/REQUEST_USERS';
export const SUCCESS_USERS = '@containsers/Users/SUCCESS_USERS';
export const FAILED_USERS = '@containsers/Users/FAILED_USERS';

export function requestUsers() {
  return {
    type: REQUEST_USERS,
  }
}

export function successUsers(users) {
  return {
    type: SUCCESS_USERS,
    users,
  }
}

export function failedUsers(error) {
  return {
    type: FAILED_USERS,
    error,
  }
}

export const fetchUsers = () => (dispatch) => {
  return fetch('http://localhost:8000/api.json')
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch(successUsers(users));
    })
}
