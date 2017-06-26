
import React from 'react';
import ReactOnRails from 'react-on-rails';
import LandingPageContainer from '../containers/LandingPageContainer';

const LandingPage = (props, _railsContext) => {
  const reactComponent = (
    <div>
      <LandingPageContainer />
    </div>
  );
  return reactComponent;
};

ReactOnRails.register( {LandingPage} );
