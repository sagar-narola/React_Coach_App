import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import SubmitButton from '../components/SubmitButton'
import RegisterHeader from '../components/RegisterHeader'
import LoginLink from '../components/LoginLink'
import Error from '../components/Error'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  user: {
                     email: '',
                     password: '',
                     password_confirmation: '',
                     first_name: '',
                     last_name: '',
                     phone_number: '',
                     bio: '',
                     facebook_link: '',
                     twitter_link: '',
                     linked_in_link: '',
                     selected: 'sign_up',
                   },
                   errors: {},
                   items: [],
                   translation: this.props.data.translation,
                };
  }

// TextBox's Onchange

  updateEmail(e) {
    var newUser = this.state.user;
    newUser.email = e.target.value;
    this.setState({user: newUser});
  }


  updatePassword(e) {
    var newUser = this.state.user;
    newUser.password = e.target.value;
    this.setState({user: newUser});
  }

  updateConfirmPassword = (e) => {
    var newUser = this.state.user;
    newUser.password_confirmation = e.target.value;
    this.setState({user: newUser});
  }

  updateFirstName = (e) => {
    var newUser = this.state.user;
    newUser.first_name = e.target.value;
    this.setState({user: newUser});
  }

  updateLastName = (e) => {
    var newUser = this.state.user;
    newUser.last_name = e.target.value;
    this.setState({user: newUser});
  }

  updatePhoneNumber = (e) => {
    var newUser = this.state.user;
    newUser.phone_number = e.target.value;
    this.setState({user: newUser});
  }

  updateBio = (e) => {
    var newUser = this.state.user;
    newUser.bio = e.target.value;
    this.setState({user: newUser});
  }

  updateFacebookLink = (e) => {
    var newUser = this.state.user;
    newUser.facebook_link = e.target.value;
    this.setState({user: newUser});
  }

  updateTwitterLink = (e) => {
    var newUser = this.state.user;
    newUser.twitter_link = e.target.value;
    this.setState({user: newUser});
  }

  updateLinkedInLink = (e) => {
    var newUser = this.state.user;
    newUser.linked_in_link = e.target.value;
    this.setState({user: newUser});
  }

  submitSignUp(e){
    e.preventDefault();
    var data = {
      user: this.state.user
    }
    console.log(data);
    // Submit form via jQuery/AJAX
    $.ajax({
        url: '/users',
        type: 'POST',
        data: data,
        dataType: "json",
        success: (data) => {
          console.log("success ma che"+ data);

          this.setState({
            user: {
                             email: '',
                             password: '',
                             password_confirmation: '',
                             first_name: '',
                             last_name: '',
                             phone_number: '',
                             bio: '',
                             facebook_link: '',
                             twitter_link: '',
                             linked_in_link: '',
            },
            errors: {}
          });
          window.location="http://localhost:3000/coach/dashboard/profile";
        },
        error: (data) => {
          this.setState({errors: data.responseJSON.errors})
          console.log(data.responseJSON.errors);
          this.show_error()
          //console.log("error ma che");
        }
      });
  }
  show_error = () => {
    this.state.items = []
    var pairs = this.state.items

    console.log(this.state.errors.email);

    if (this.state.errors.email != null){
      this.state.errors.email.map(function(player){
        pairs.push("Email " + player);
      })
    }

    if (this.state.errors.password != null){
      this.state.errors.password.map(function(player){
        pairs.push("Password " + player);
      })
    }
    if (this.state.errors.password_confirmation != null){
      this.state.errors.password_confirmation.map(function(player){
        pairs.push("Confirm Password " + player);
      })
    }

    if (this.state.errors.first_name != null){
      this.state.errors.first_name.map(function(player){
        pairs.push("First Name " + player);
      })
    }

    if (this.state.errors.last_name != null){
      this.state.errors.last_name.map(function(player){
        pairs.push("Last Name " + player);
      })
    }

    if (this.state.errors.phone_number != null){
      this.state.errors.phone_number.map(function(player){
        pairs.push("Phone Number " + player);
      })
    }

    if (this.state.errors.bio != null){
      this.state.errors.bio.map(function(player){
        pairs.push("Bio " + player);
      })
    }

    if (this.state.errors.facebook_link != null){
      this.state.errors.facebook_link.map(function(player){
        pairs.push("Facebook Link " + player);
      })
    }

    if (this.state.errors.twitter_link != null){
      this.state.errors.twitter_link.map(function(player){
        pairs.push("Twitter Link " + player);
      })
    }

    if (this.state.errors.linked_in_link != null){
      this.state.errors.linked_in_link.map(function(player){
        pairs.push("Linked In Link " + player);
      })
    }


    this.setState({items: pairs})
    console.log(this.state.items);
  }

// Form Submit
  render() {
    var errors = this.state.items.map(function(item){
      return (
        <Error error={item} key={item}></Error>
      );
    });
    return (
      <div>
        <Header {...this.state}/>

          <div className="bg-fix">
          	<div className="container">
          		<div className="frm-sec flex-box">
                <div className="reg-frm step1" id="step1">
                  <div className="white-box small">
                    <div id="floating_alert">
                      {errors}
                    </div>
                    <form onSubmit={this.submitSignUp.bind(this)}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" value={this.state.user.email} onChange={this.updateEmail.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" value={this.state.user.password} onChange={this.updatePassword.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm_password" value={this.state.user.confirm_password} onChange={this.updateConfirmPassword.bind(this)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" value={this.state.user.first_name} onChange={this.updateFirstName.bind(this)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" id="lname" value={this.state.user.last_name} onChange={this.updateLastName.bind(this)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" className="form-control" id="phone" value={this.state.user.phone_number} onChange={this.updatePhoneNumber.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea type="text" className="form-control" id="bio"  value={this.state.user.bio} onChange={this.updateBio.bind(this)} ></textarea>
                      </div>
                      <div className="form-group social">
                        <input type="text" className="form-control" id="fb" placeholder="Past link here" value={this.state.user.facebook_link} onChange={this.updateFacebookLink.bind(this)}/>
                        <i className="zmdi zmdi-facebook zmdi-hc-fw"></i>
                      </div>
                      <div className="form-group social">
                        <input type="text" className="form-control" id="twit" placeholder="Past link here" value={this.state.user.twitter_link} onChange={this.updateTwitterLink.bind(this)} />
                        <i className="zmdi zmdi-twitter zmdi-hc-fw"></i>
                      </div>
                      <div className="form-group social">
                        <input type="text" className="form-control" id="in" placeholder="Past link here" value={this.state.user.linked_in_link} onChange={this.updateLinkedInLink.bind(this)} />
                        <i className="zmdi zmdi-linkedin zmdi-hc-fw"></i>
                      </div>
                      <button type="submit" className="g-btn block-btn">Submit</button>
                    </form>
                  </div>
                </div>
          		</div>
          	</div>
          </div>

        <Footer />
      </div>
    );
  }
}
