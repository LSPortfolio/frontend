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
    const urlToken = url.match(/([A-Z])\d\w.+/g).join('');
    this.setState({ token: urlToken });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.token);
    axios
      .put(`https://lambda-showcase-backend.herokuapp.com/user/resetPassword?token=${this.state.token}`, {password: this.state.password})
      .then(res => {
        alert(res.response.data);
      })
      .catch(res => {
        console.log(res);
        alert(JSON.stringify(res.response.data));
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
