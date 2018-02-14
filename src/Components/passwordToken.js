import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import axios from 'axios'

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
    console.log(url);
    const token = url.match(/([A-Z])\d\w.+/g)
    this.setState({ token: token.join('') });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      token: this.state.token,
      password: this.state.password
    }
    axios
      .put(`https://lambda-showcase-backend.herokuapp.com/user/resetPassword?token=${data.token}`, data)
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
          <label>Input new password</label>
          <FormGroup>
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
