import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import axios from 'axios'

export class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '', 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      email: this.state.email,
    }

    axios
      .post(`https://lambda-showcase-backend.herokuapp.com/user/forgotPassword`, data)
      .then(res => {
        alert('A code was sent to your email address!');
      })
      .catch(err => {
        alert('Could not find your email address!');
      })
  }

  render() {
    return (
      <div className="container">
        <form>
          <h2>Forgot Password</h2>
          <br />
          <FormGroup>
            <FormControl
              className="input_form"
              placeholder="Email Address"
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              name="email"
            />
          </FormGroup>
          <div className="buttons_layout" id="signup_btns">
            <button onClick={this.handleSubmit}>Reset Password</button>
          </div>
        </form>
      </div>
    )
  }
}
