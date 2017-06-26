import React from 'react'
import ReactOnRails from 'react-on-rails'
import LandingPageComponet from '../components/LandingPageComponet'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default class LandingPageContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
      //this.state = { selected: this.props.selected };
    this.state = { selected: 'Home' };
    //alert(this.state);
  }

  render() {
    return (
      <div>
        <Header {...this.state}/>
        <LandingPageComponet {...this.state}/>
        <Footer />
      </div>
    );
  }
}
