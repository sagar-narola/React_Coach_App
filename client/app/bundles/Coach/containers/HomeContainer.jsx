import React from 'react'
import ReactOnRails from 'react-on-rails'
import HomeComponent from '../components/HomeComponent'
import Profile from '../components/Profile'
import Conversation from '../components/Conversation'
import Payment from '../components/Payment'
import Library from '../components/Library'
import PaymentSuccess from '../components/PaymentSuccess'
import PaymentSuccessCard from '../components/PaymentSuccessCard'
import CoachSetting from '../components/CoachSetting'


import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'


export default class HomeContainer extends React.Component {
  render() {
    return (
      <div>
          <Router history={hashHistory}>
            <Route path="/" component={HomeComponent}>
                <IndexRoute component={Profile} />
                  <Route path="conversation" component={Conversation} />
                    <Route path="payment" component={Payment} />
                      <Route path="payment_success" component={PaymentSuccess} />
                        <Route path="payment_success_card" component={PaymentSuccessCard} />
                          <Route path="CoachSetting" component={CoachSetting} />
                        <Route path="library" component={Library} />

            </Route>
        </Router>

            <div className="modal fade center" id="invClient" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="zmdi zmdi-close zmdi-hc-fw"></i></button>
                    <h4 className="modal-title" id="myModalLabel">INVITE A CLIENT</h4>
                  </div>
                  <div className="modal-body">
                    <form className="inv-frm">
                      <div className="form-group">
                        <label htmlFor="inEmail" className="control-label">Email</label>
                        <input type="email" className="form-control" id="inEmail" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="inMsg" className="control-label">Message</label>
                        <textarea className="form-control" id="inMsg" ></textarea>
                      </div>
                      <button type="submit" className="g-btn block-btn">Invite</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
