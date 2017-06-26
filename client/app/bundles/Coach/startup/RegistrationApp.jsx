import React from 'react'
import ReactOnRails from 'react-on-rails'
import Register from '../containers/RegisterContainer'
import RegisterHeader from '../components/RegisterHeader'

const Registration = (props, _railsContext) => {
  const reactComponent = (
      <div>
        <Register {...props} />
      </div>
  );
  return reactComponent;
};

ReactOnRails.register( {Registration} );
