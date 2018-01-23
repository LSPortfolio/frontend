import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import ClassNavBar from './classNavBar'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import axios from 'axios';

// const port = process.env.PORT || 5280;

export class SubmitProject extends Component {
  constructor() {
    super()
    this.state = {
      studentName: '',
      lambdaClass: '',
      projectName: '',
      githubUrl: '',
      Description: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleClassChange = this.handleClassChange.bind(this)
    this.handleProjectChange = this.handleProjectChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
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

  handleClassChange(e) {
    this.setState({ lambdaClass: e.target.value });
  }

  handleUrlChange(e) {
    this.setState({ githubUrl: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ Description: e.target.value });
  }

  personalProjectSubmit(e) {
    console.log('Submitted!');
  }

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
          <FormControl
            className="input_form"
            placeholder="GitHub URL"
            onChange={this.handleUrlChange}
          />
        <FormControl 
          className="input_form"
          placeholer="Description"
          onChange={this.handleDescriptionChange}
        />
          <button onClick={this.personalProjectSubmit}><Link to='/newProject'>Submit</Link></button>
        </FormGroup>
      </div>
    )
  }
}
