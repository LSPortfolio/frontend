import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import axios from 'axios'

const port = process.env.PORT || 5280

export class PasswordToken extends Component {
  constructor() {
    super()
    this.state = {
      token: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const url = window.location.href;
    url.replace()
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      token: this.state.token,
      password: this.state.password
    }
    axios
      .put(`http://localhost:${port}/user/resetPassword`, data)
      .then(res => {
        alert('Password reset Successful!')
      })
      .catch(err => {
        alert('Password reset unsuccessful!')
      })
  }

  render() {
    return (
      <div>
        <form>
          <label>Please provide the given code:</label>
          <FormGroup>
            <FormControl 
              className="input_form"
              placeholder="Code"
              onChange={this.handleChange}
              value={this.state.token}
              type="text"
              name="token"
            />
            <FormControl 
              className="input_form"
              placeholder="New Password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              name="password"
            />
          </FormGroup>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
