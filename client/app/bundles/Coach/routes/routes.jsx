import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/static_pages/home" component={ Profile } />
    </Router>,
    document.getElementById( 'react-root' )
  );
});
