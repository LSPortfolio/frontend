import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
// import ClassNavBar from './classNavBar';
import axios from 'axios';

// import axios from 'axios';

// const port = process.env.PORT || 5280;

export class SubmitProject extends Component {
  constructor() {
    super();
    this.state = {
      studentName: '',
      lambdaClass: '',
      projectName: '',
      githubUrl: '',
      uploadFile: '',
      contributors: [],
      likes: 0,
      tags: [],
      description: '',
      id: 0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleContributorsChange = this.handleContributorsChange.bind(this);
  }

  handleClassChange(e) {
    let tempClass = e.target.value.split('');
    for (let i = 0; i < tempClass.length; i++) {
      tempClass[i] = tempClass[i].toUpperCase();
    }
    this.setState({ lambdaClass: tempClass.join('') });
  }

  handleNameChange(e) {
    this.setState({ studentName: e.target.value });
  }

  handleMediaChange(e) {
    
  }

  handleProjectChange(e) {
    this.setState({ projectName: e.target.value });
  }

  handleClassChange(e) {
    this.setState({ lambdaClass: e.target.value });
  }

  handleUrlChange(e) {
    this.setState({ githubUrl: e.target.value });
  }

  handleUploadChange(e) {
    this.setState({ uploadFile: e.target.value });
    alert(this.state.uploadFile);
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleContributorsChange(e) {
    this.setState({ contributors: e.target.value });
  }
  
  handleTagsChange(e) {
    this.setState({ tags: e.target.value });
  }

  personalProjectSubmit() {
    let student = this.state.studentName;
    let lambdaClass = this.state.lambdaClass;
    let projectName = this.state.projectName;
    let url = this.state.githubUrl;
    let likes = this.state.likes;
    let contributors = this.state.contributors;
    let tags = this.state.tags;
    let description = this.state.description;
    let file = this.state.uploadFile;
    let id = this.state.id;

    let body = {
      student,
      lambdaClass,
      projectName,
      url,
      likes,
      contributors,
      tags,
      description,
      file,
      id
    };
    
    let form = new FormData();
    form.append(file);

    axios.post('/project/createProject', body, form);

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
            placeholder="Contributors"
            onChange={ this.handleContributorsChange }
          />
          <FormControl
            className="input_form"
            placeholder="Tags"
            onChange={ this.handleTagsChange }
          />
          <textarea
            className="form-control"
            placeholder="Description"
            onChange={this.handleDescriptionChange}
            rows='3'
            id='formthing'
            style={{resize: 'none', marginBottom: 10}}
            
          />
          <input type='file'
            onChange={ this.handleUploadChange }
            style={{ marginBottom: 30 }}
          />
          <button onClick={ this.personalProjectSubmit }>Submit</button>
        </FormGroup>
      </div>
    )
  }
}
