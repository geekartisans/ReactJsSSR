import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions';


class Users extends Component {
  static getInitialProps({ req, dispatch }) {
    return dispatch(fetchUsers());
  }
  componentDidMount() {
    const { users, dispatch } = this.props;
    if (!users.length) dispatch(fetchUsers());
  }
  render() {
    const { users = [] } = this.props;
    
    return (
      <div>
        <div>Users</div>
        <ul>
          {
            users.map((user, key) => {
              return (
                <li key={key}>{user.name}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onLoad: () => {
      dispatch(requestUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
