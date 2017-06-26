import React from 'react';

export default class Conversation extends React.Component {

  render() {
    return(
      <div>

        <div className="conver-wrap">
          <div className="client-wrap">
            <div className="search-client">
              <input type="text" className="form-control" placeholder="Search clients..." />
              <button className="search-btn" type="button"><i className="zmdi zmdi-search zmdi-hc-fw"></i></button>
            </div>
            <div className="client-inner">
              <div className="result-list">
                <div className="client-sec panding">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
                <div className="client-sec active">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
                <div className="client-sec">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
                <div className="client-sec">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
                <div className="client-sec">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
                <div className="client-sec">
                  <div className="client-disp">
                    <div className="client-img"><img src="/assets/avtar2.png" /></div>
                    <div className="client-desc">
                      <h2 className="client-name">Sharon Herrera</h2>
                      <p className="desig">Coach</p>
                    </div>
                  </div>
                  <p className="client-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  <div className="c-time"><span>14:30</span> <span className="panding"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="conver-sec">
            <div className="client-panel">
              <div className="visible-xs back-arrow"><a href="#"><i className="zmdi zmdi-arrow-left zmdi-hc-fw"></i> Back</a></div>
              <div className="c-pro"><a href="#"><i className="zmdi zmdi-account zmdi-hc-fw"></i> Client Profile</a></div>
            </div>
            <div className="conver-board">
              <div className="post-wrap">
                <div className="user-img"><img src="/assets/avtar2.png" /></div>
                <div className="post-sec">
                  <div className="post-cont">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standardLorem.</p>
                  </div>
                  <div className="post-time">01:24 PM</div>
                </div>
              </div>
              <div className="post-wrap">
                <div className="user-img"><img src="/assets/avtar2.png" /></div>
                <div className="post-sec">
                  <div className="post-cont">
                    <video width="100%" controls
                      poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
                      <source
                        src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
                        type="video/webm"/>
                      <source
                        src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
                        type="video/mp4"/>
                      <source
                        src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
                        type="video/ogg"/>
                      Your browser doesn't support HTML5 video tag.
                    </video>
                  </div>
                  <div className="post-time">01:24 PM</div>
                </div>
              </div>
              <div className="post-wrap">
                <div className="user-img"><img src="/assets/avtar2.png" /></div>
                <div className="post-sec">
                  <div className="post-cont">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standardLorem.</p>
                  </div>
                  <div className="post-time">01:24 PM</div>
                </div>
              </div>
              <div className="post-wrap">
                <div className="user-img"><img src="/assets/avtar2.png" /></div>
                <div className="post-sec">
                  <div className="post-cont">
                    <p>I have shared with you quiz 1.</p>
                    <a href="#" className="g-btn">Open Quiz</a>
                  </div>
                  <div className="post-time">01:24 PM</div>
                </div>
              </div>
              <div className="post-wrap">
                <div className="user-img"><img src="/assets/avtar2.png" /></div>
                <div className="post-sec">
                  <div className="post-cont">
                    <p>I have shared with you lesson 3.</p>
                    <a href="#" className="g-btn">Open Lesson</a>
                  </div>
                  <div className="post-time">01:24 PM</div>
                </div>
              </div>
            </div>
            <div className="input-wrap">
              <div className="input-block"><textarea className="msg-text" placeholder="What's on your mind"></textarea></div>
              <div className="msg-act">
                <ul>
                  <li><a href="#" data-toggle="modal" data-target="#attachG"><i className="zmdi zmdi-collection-text zmdi-hc-fw"></i>Library</a></li>
                  <li>
                    <div className="attach-block">
                      <i className="zmdi zmdi-attachment-alt zmdi-hc-fw"></i> Attach
                        <input type="file" />
                      </div>
                    </li>
                    <li><button type="button" className="send-btn"><i className="zmdi zmdi-mail-send zmdi-hc-fw"></i></button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade center" id="attachG" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="zmdi zmdi-close zmdi-hc-fw"></i></button>
                  <h4 className="modal-title" id="myModalLabel">Attach From Library</h4>
                </div>
                <ul className="nav nav-tabs a-tab" role="tablist">
                  <li role="presentation" className="active"><a href="#videoT" aria-controls="video" role="tab" data-toggle="tab">Videos</a></li>
                  <li role="presentation"><a href="#lessonT" aria-controls="lesson" role="tab" data-toggle="tab">Lessons</a></li>
                  <li role="presentation"><a href="#quizT" aria-controls="quiz" role="tab" data-toggle="tab">Quiz</a></li>
                </ul>
                <div className="modal-body">
                  <div className="g-tab">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="videoT">
                        <div className="lib-sec">
                          <div className="lib-row">
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check1"><input type="checkbox" id="check1" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check2"><input type="checkbox" id="check2" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check3"><input type="checkbox" id="check3" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check4"><input type="checkbox" id="check4" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check5"><input type="checkbox" id="check5" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check6"><input type="checkbox" id="check6" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach video 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="lessonT">
                        <div className="lib-sec">
                          <div className="lib-row">
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check7"><input type="checkbox" id="check7" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach lesson 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check8"><input type="checkbox" id="check8" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach lesson 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-img"><img src="/assets/video-img.png" className="fix-img" /></div>
                                  <div className="lib-overlay">
                                    <div className="check-mark"><label htmlFor="check9"><input type="checkbox" id="check9" name="choose" /><span></span></label></div>
                                    <div className="libe-name"><h3>Coach lesson 1</h3></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="quizT">
                        <div className="lib-sec">
                          <div className="lib-row">
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-text">
                                    <div className="check-mark"><label htmlFor="check10"><input type="checkbox" id="check10" name="choose" /><span></span></label></div>
                                    <div className="inner-text">
                                      <h3>Coach Quiz 1</h3>
                                      <p>Some Question that Couch writ for this QUIZ ?</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-text">
                                    <div className="check-mark"><label htmlFor="check11"><input type="checkbox" id="check11" name="choose" /><span></span></label></div>
                                    <div className="inner-text">
                                      <h3>Coach Quiz 1</h3>
                                      <p>Some Question that Couch writ for this QUIZ ?</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lib-col">
                              <div className="lib-block">
                                <div className="lib-disp">
                                  <div className="lib-text">
                                    <div className="check-mark"><label htmlFor="check12"><input type="checkbox" id="check12" name="choose" /><span></span></label></div>
                                    <div className="inner-text">
                                      <h3>Coach Quiz 1</h3>
                                      <p>Some Question that Couch writ for this QUIZ ?</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="gl-btn" data-dismiss="modal">Cancel</button>
                  <button type="button" className="g-btn" data-toggle="modal" data-target="#attVid">Attach</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade center" id="attVid" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="zmdi zmdi-close zmdi-hc-fw"></i></button>
                  <h4 className="modal-title" id="myModalLabel">Coach 1</h4>
                </div>
                <div className="modal-body">
                  <div className="att-wrap">
                    <h3>Video Title <i className="zmdi zmdi-edit zmdi-hc-fw"></i></h3>
                    <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument pertaining to whether or not hypnosis quit smoking treatments are actually.</p>
                    <div className="att-vid">
                      <video width="100%" controls
                        poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
                        <source
                          src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
                          type="video/webm" />
                        <source
                          src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
                          type="video/mp4" />
                        <source
                          src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
                          type="video/ogg" />
                        Your browser doesn't support HTML5 video tag.
                      </video>
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
