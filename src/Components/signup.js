import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, FormGroup } from 'react-bootstrap'

import { register } from '../Actions'

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// passport.use(
//   new GoogleStrategy({
//     callbackURL: '/auth/google/redirect',
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   }), () => {

//   }
// );

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        role: '',
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    const { user } = this.state
    this.setState({
      user: {
          ...user,
          [name]: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ submitted: true })
    const { user } = this.state
    const { dispatch } = this.props
    if (user.firstname && user.lastname && user.username && user.password) {
      dispatch(register(user))
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;

    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form>
          <FormGroup>
            <FormControl
              className={'form-group' + (submitted && !user.firstname ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="First Name"
              type="text"
              name="firstname"
              value={this.state.firstname}
            />
            {submitted && !user.firstname && <div className="help-block">First Name is required</div>}
            <FormControl
              className={'form-group' + (submitted && !user.lastname ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Last Name"
              type="text"
              name="lastname"
              value={this.state.lastname}
            />
            {submitted && !user.lastname && <div className="help-block">Last Name is required</div>}
            <FormControl
              className={'form-group' + (submitted && !user.email ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
            />
            {submitted && !user.email && <div className="help-block">Email is required</div>}
            <FormControl
              className={'form-group' + (submitted && !user.username ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
            />
            {submitted && !user.username && <div className="help-block">Username is required</div>}
            <FormControl
              className={'form-group' + (submitted && !user.password ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
            />
            {submitted && !user.password && <div className="help-block">Password is required</div>}
            <div className="buttons_layout" id="signup_btns">
              <label>Account Type:</label>
              <select name="role" onChange={this.handleChange}>
                <option value="1">User</option>
                <option value="2">Student</option>
              </select>
            </div>
          </FormGroup>
          <button onClick={this.handleSubmit}>
            Sign Up
          </button>
          {registering && (
            <img
              alt="loading"
              id="loading"
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
          )}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration
  return {
    registering
  }
}

const connectedRegisterPage = connect(mapStateToProps)(SignUp)
export { connectedRegisterPage as SignUp }
