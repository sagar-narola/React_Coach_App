import React from 'react'
import ReactOnRails from 'react-on-rails'
import FeaturesPageComponet from '../components/FeaturesPageComponet'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default class FeaturesPageContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
      //this.state = { selected: this.props.selected };
    this.state = { selected: 'Features' };
    //alert(this.state);
  }


  render() {

    return (
      <div>
        <Header {...this.state}/>
          <FeaturesPageComponet />
        <Footer />
      </div>
    );
  }
}
