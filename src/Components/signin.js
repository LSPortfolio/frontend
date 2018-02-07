import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { login } from '../Actions'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false,
      token: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ submitted: true })
    const { username, password } = this.state
    const { dispatch } = this.props
    if (username && password) dispatch(login(username, password))
  }

  render() {
    const { loggingIn } = this.props
    const { username, password, submitted } = this.state;
    return (
      <div className="container" id="signin_container">
        <h2>Sign In</h2>
        <form>
          <FormGroup>
            <FormControl
              className={'form-group' + (submitted && !username ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Username"
              name="username"
              value={username}
            />
            {submitted && !username && (<div className="help-block">Username is required</div>)}
            <FormControl
              className={'form-group' + (submitted && !password ? ' has-error' : '')}
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              value={password}
              type='password'
            />
            {submitted && !password && (<div className="help-block">Password is required</div>)}
          </FormGroup>
          <div className="buttons_layout">
            <button onClick={this.handleSubmit}>Sign In</button>
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          {loggingIn && (
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

const mapStateToProps = state => {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const connectedSignIn = connect(mapStateToProps)(SignIn)
export { connectedSignIn as SignIn }
