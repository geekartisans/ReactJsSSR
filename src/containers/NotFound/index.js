import React, { Component } from 'react';

export default class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.status = 404;
    }
  }

  render() {
    return (
      <div>Not found page!</div>
    )
  }
}
