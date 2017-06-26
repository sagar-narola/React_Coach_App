import React from 'react'
import ReactOnRails from 'react-on-rails'
import HomeContainer from '../containers/HomeContainer'

const Home = (props, _railsContext) => {
  const reactComponent = (

          <HomeContainer />
  );
  return reactComponent;
};

ReactOnRails.register( {Home} );
