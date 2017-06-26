import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux';
import configureStore from '../store/LoginStore';

import LoginPage from '../containers/LoginPage'

const Login = (props, _railsContext) => {
  const reactComponent = (
    <Provider store={configureStore(props)}>
      <LoginPage {...props} />
    </Provider>
  );
  
  return reactComponent;
};

ReactOnRails.register( {Login} );
