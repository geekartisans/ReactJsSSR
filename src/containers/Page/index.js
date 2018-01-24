import React from 'react';
import { connect } from 'react-redux'


function Page(props) {
  return (
    <div>Page Component</div>
  );
}

export default connect()(Page);
