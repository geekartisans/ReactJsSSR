import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUsers } from './actions';


class Users extends Component {
  componentWillMount() {
    const { users, onLoad } = this.props;
    if (!users.length) onLoad();
  }
  
  render() {
    const { users = [] } = this.props;
    
    return (
      <div>
        <ul>
          {
            users.map((user) => {
              return (
                <li>{user.name}</li>
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
