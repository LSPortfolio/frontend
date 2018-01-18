import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
// import axios from 'axios';

// const port = process.env.PORT || 5280;

export class SubmitProject extends Component {
  constructor() {
    super()
    this.state = {
      studentName: '',
      lambdaClass: '',
      projectName: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleClassChange = this.handleClassChange.bind(this)
    this.handleProjectChange = this.handleProjectChange.bind(this)
  }

  handleClassChange(e) {
    let tempClass = e.target.value
    tempClass = tempClass.split('')
    for (let i = 0; i < tempClass.length; i++) {
      tempClass[i] = tempClass[i].toUpperCase()
    }
    tempClass = tempClass.join('')
    this.setState({ lambdaClass: tempClass })
  }

  handleNameChange(e) {
    this.setState({ studentName: e.target.value })
  }

  handleProjectChange(e) {
    this.setState({ projectName: e.target.value })
  }

  personalProjectSubmit() {}

  render() {
    return (
      <div className="container">
        <FormGroup>
          <h1>Submit Your Personal Project</h1>
          <FormControl
            className="input_form"
            placeholder="Lambda Class"
            onChange={this.handleClassChange}
          />
          <FormControl
            className="input_form"
            placeholder="Name"
            onChange={this.handleNameChange}
          />
          <FormControl
            className="input_form"
            placeholder="Project Name"
            onChange={this.handleProjectChange}
          />
          <button>Submit</button>
        </FormGroup>
      </div>
    )
  }
}
