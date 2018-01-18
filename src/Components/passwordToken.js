import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import axios from 'axios'

const port = process.env.PORT || 5280

export class PasswordToken extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      token: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ email: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      answer: this.state.answer,
      password: this.state.password
    }
    axios
      .post(`http://localhost://${port}/user/resetPassword`, data)
      .then(res => {
        alert('Check your email for a link to reset your password!')
      })
      .catch(err => {
        alert('Password reset unsuccessful!')
      })
  }

  render() {
    return (
      <div>
        <form>
          <label>Please provide your email:</label>
          <FormGroup>
            <FormControl onChange={this.handleChange} />
          </FormGroup>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
