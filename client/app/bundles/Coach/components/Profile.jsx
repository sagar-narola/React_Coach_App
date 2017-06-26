import React from 'react';

export default class Profile extends React.Component {

  render() {
    return(
      <div className="profile-block">
        <div className="cover-block">
          <div className="cover-img"><img src='/assets/cover2.png' className="fix-img" /></div>
          <div className="cover-action"><a href="#"><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Edit Cover</a></div>
          <div className="user-block">
            <div className="user-avtar">
              <img src="/assets/avtar2.png" />
            </div>
            <div className="user-right">
              <h2 className="user-name">Carl Wagner</h2>
              <div className="user-action">
                <a href="#"><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Edit Avatar</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="white-box">
                <div className="box-title">
                  <h2 className="title-text">About</h2>
                  <div className="box-action"><a href="#"><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Edit</a></div>
                </div>
                <div className="box-body">
                  <div className="about-client">
                    <p className="about-text">The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall. The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.Legend tells that that the Emerald Buddha was created in Pataliputra, India, which is now the city of Patna in 43 BCE by Nagasena. </p>
                    <div className="row about-extra">
                      <div className="col-sm-4"><p><i className="zmdi zmdi-phone zmdi-hc-fw"></i> 377-229-4453</p></div>
                      <div className="col-sm-8"><p><i className="zmdi zmdi-email zmdi-hc-fw"></i> magdalena.abshire@hotmail.com</p></div>
                    </div>
                    <ul className="social">
                      <li><a href="#"><i className="zmdi zmdi-facebook zmdi-hc-fw"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-twitter zmdi-hc-fw"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-linkedin zmdi-hc-fw"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="white-box">
                <div className="box-title">
                  <h2 className="title-text">Skills</h2>
                  <div className="box-action"><a href="#"><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Edit</a></div>
                </div>
                <div className="box-body">
                  <div className="tag-manage vis">
                    <div className="form-group">
                      <input type="text" name="tags" placeholder="Tags" className="tm-input form-control" />
                    </div>
                    <div className="skill-list"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="white-box">
                <div className="box-title">
                  <h2 className="title-text">Clients</h2>
                  <div className="box-action"><a href="#" data-toggle="modal" data-target="#invClient"><i className="zmdi zmdi-plus-circle zmdi-hc-fw"></i> Invite a client</a></div>
                </div>
                <div className="box-body">
                  <div className="client-list">
                    <div className="row">
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Alan Mills</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Hannah Lucas</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Bryan Hamilton</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Aaron Malone</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Adam Morris</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Rosetta Patton</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Hallie Clayton</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block">
                          <div className="client-img"><img src="/assets/avtar2.png" /></div>
                          <div className="client-desc">
                            <h3 className="client-name">Francis Freeman</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block panding">
                          <div className="client-img"><i className="zmdi zmdi-account zmdi-hc-fw"></i></div>
                          <div className="client-desc">
                            <h3 className="client-name">Adam Morris</h3>
                            <p><i className="zmdi zmdi-refresh zmdi-hc-fw"></i> Panding</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4 col-lg-3">
                        <div className="client-block panding">
                          <div className="client-img"><i className="zmdi zmdi-account zmdi-hc-fw"></i></div>
                          <div className="client-desc">
                            <h3 className="client-name">Jon Jackson</h3>
                            <p><i className="zmdi zmdi-refresh zmdi-hc-fw"></i> Panding</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="white-box">
                <div className="box-title">
                  <h2 className="title-text">About</h2>
                  <div className="box-action"><a href="#"><i className="zmdi zmdi-check zmdi-hc-fw"></i> Save</a><a href="#" className="cancel"><i className="zmdi zmdi-close zmdi-hc-fw"></i> Cancel</a></div>
                </div>
                <div className="box-body">
                  <div className="about-client">
                    <form className="">
                      <div className="form-group">
                        <textarea className="form-control" id="about"></textarea>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group icn">
                            <input type="text" className="form-control" id="call" />
                            <i className="zmdi zmdi-phone zmdi-hc-fw"></i>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group icn">
                            <input type="email" className="form-control" id="Email" />
                            <i className="zmdi zmdi-email zmdi-hc-fw"></i>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group icn">
                            <input type="text" className="form-control" id="fb" placeholder="Past link here" />
                            <i className="zmdi zmdi-facebook zmdi-hc-fw"></i>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group icn">
                            <input type="text" className="form-control" id="twit" placeholder="Past link here" />
                            <i className="zmdi zmdi-twitter zmdi-hc-fw"></i>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group icn">
                            <input type="text" className="form-control" id="in" placeholder="Past link here" />
                            <i className="zmdi zmdi-linkedin zmdi-hc-fw"></i>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="white-box">
                <div className="box-title">
                  <h2 className="title-text">Skills</h2>
                  <div className="box-action"><a href="#"><i className="zmdi zmdi-check zmdi-hc-fw"></i> Save</a><a href="#" className="cancel"><i className="zmdi zmdi-close zmdi-hc-fw"></i> Cancel</a></div>
                </div>
                <div className="box-body">
                  <div className="tag-manage">
                    <div className="form-group">
                      <input type="text" name="tags" placeholder="Tags" className="tm-input form-control" />
                    </div>
                    <div className="skill-list"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
