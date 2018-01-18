import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'containers/Main';


export default (props) => {
  console.log(props);
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/football" exact component={Main} />
    </Switch>
  );
}
