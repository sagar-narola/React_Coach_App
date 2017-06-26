import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import CoachHomeHeaderComponent from '../components/CoachHomeHeaderComponent'

export default class HomeComponent  extends React.Component {
  render() {

    return (
      <div>
        <CoachHomeHeaderComponent />
        <div className="dash-wrap">
          <div className="sidebar">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="in-btn"><a href="#" data-toggle="modal" data-target="#invClient">Invite a client</a></li>
                <li><a href="#"><i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i>Dashboard</a></li>
                <li><Link to='conversation'><i className="zmdi zmdi-comments zmdi-hc-fw"></i>Conversation<span className="badge">1</span></Link></li>
                <li><Link to="library"><i className="zmdi zmdi-collection-text zmdi-hc-fw"></i>Library</Link></li>
                <li><Link to="payment"><i className="zmdi zmdi-card zmdi-hc-fw"></i>Payment</Link></li>
                <li><Link to="/"><i className="zmdi zmdi-account zmdi-hc-fw"></i>My Profile</Link></li>

              </ul>
            </div>
          </div>
          <div className="dash-cont">
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}
