import React from 'react';
import { connect } from 'react-redux'


function Main (props) {
  return (
    <div>Main Component</div>
  );
}

export default connect()(Main);
