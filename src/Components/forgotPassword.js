import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const port = process.env.PORT || 5280

export class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      question: 'dog',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password,
      question: this.state.question,
      answer: this.state.answer
    }

    axios
      .post(`http://localhost:${port}/user/forgotPassword`, data)
      .then(res => {
        alert('Your password has been reset!')
      })
      .catch(err => {
        alert('Password reset unsuccessful!')
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
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.userName}
              type="text"
              name="username"
            />
            <FormControl
              className="input_form"
              placeholder="New Password"
              onChange={this.handleChange}
              value={this.state.password}
              type="text"
              name="password"
            />
            <div className="buttons_layout" id="signup_btns">
              <label>Security Question:</label>
              <select name="question" onChange={this.handleChange}>
                <option value="dog">What is your dog's name?</option>
                <option value="color">What is your favorite color?</option>
                <option value="schoolyear">
                  What year did you graduate from high school?
                </option>
                <option value="maidenname">
                  What is your mother's maiden name?
                </option>
                <option value="firstcar">
                  What was the model of your first car?
                </option>
              </select>
            </div>
            <FormControl
              className="input_form"
              placeholder="Answer"
              onChange={this.handleChange}
              value={this.state.answer}
              type="text"
              name="answer"
            />
          </FormGroup>
          <div className="buttons_layout" id="signup_btns">
            <button onClick={this.handleSubmit}>Reset Password</button>
            <Link to="/passwordToken">Forgot Security Question?</Link>
          </div>
        </form>
      </div>
    )
  }
}
