import React from 'react';
import ReactOnRails from 'react-on-rails';


export default class Header extends React.Component {
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
      //this.state = { selected: this.props.selected };
    this.state = { selected: this.props.selected };

  }

  setFilter(filter) {
    this.setState({selected  : filter})
    this.props.onChangeFilter(filter);
  }
  isActive(value){
    return (value===this.state.selected) ?'active':'default';
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="/assets/logo.svg"></img>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li id="home" className={this.isActive('Home')} ><a href="/">Home</a></li>
              <li id="features" className={this.isActive('Features')} ><a href="/landing_page/page2">Features</a></li>
              <li id="sign_in" className={this.isActive('sign_in')}><a href="/users/sign_in">Sign In</a></li>
              <li className="s-btn"><a href="/users/sign_up">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
