
import React from 'react';
import ReactOnRails from 'react-on-rails';
import FeaturesPageContainer from '../containers/FeaturesPageContainer';

const FeaturesPage = (props, _railsContext) => {
  const reactComponent = (
    <div>
      <FeaturesPageContainer />
    </div>
  );

  return reactComponent;
};

ReactOnRails.register( {FeaturesPage} );
