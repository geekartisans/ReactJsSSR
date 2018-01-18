import React from 'react';
import { connect } from 'react-redux'


function Main (props) {
  console.log(props);
  return (
    <div>Main Component</div>
  );
}


export default connect(null, null)(Main);