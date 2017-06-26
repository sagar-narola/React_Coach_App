import React from 'react';
import ReactOnRails from 'react-on-rails';


export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <div className="about flex-box">
                <p>TOPCOACHING SOME TEXT HERE ABOUT US OUR MISSON MAYBE OR SOMETHING ELSE</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-2 col-md-3">
              <h2 className="foot-title">ABOUT</h2>
              <ul className="foot-link">
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-2 col-md-3">
              <h2 className="foot-title">SUPPORT</h2>
              <ul className="foot-link">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3">
              <h2 className="foot-title">CONTACT</h2>
              <ul className="contact">
                <li><i className="zmdi zmdi-pin zmdi-hc-fw"></i> 77 Yundt Dam Apt. 899</li>
                <li><i className="zmdi zmdi-phone zmdi-hc-fw"></i> 080-530-3247</li>
                <li><i className="zmdi zmdi-email zmdi-hc-fw"></i> schultz_felicia@hotmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
