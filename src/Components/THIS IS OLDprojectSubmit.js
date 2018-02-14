import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* ——— Put your own Cloudinary info here for now,
  process.env doesn't work right out of the box
  you'll have to set it up per docs:
  https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
  ——— */

/* ———— REMOVE THIS ———— */
const CLOUDINARY_UPLOAD_PRESET = 'gisk1vl6'
const CLOUDINARY_CLOUD_NAME = 'dbquvargx'
const CLOUDINARY_API_KEY = '236448318463957'

export class SubmitProject extends Component {
  constructor() {
    super()
    this.state = {
      projectName: '',
      contributor: '',
      contributorName: [],
      contributors: [],
      description: '',
      files: [],
      fileUrls: [],
      githubUrl: '',
      id: 0,
      //lambdaClass: '',
      studentName: '',
      tag: '',
      tags: [],
      responsibility: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this)
    this.submitFiles = this.submitFiles.bind(this)
    this.handleContributors = this.handleContributors.bind(this);
    this.handleTags = this.handleTags.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  } 

  handleContributors(e) {
    axios.put('https://lambda-showcase-backend.herokuapp.com/user/find', { data: this.state.contributor })
      .then(response => {
        this.state.contributors.push({ name: response.data.fullname, user: response.data._id, role: response.data.role, responsibilty: this.state.responsibility });
        this.state.contributorName.push(this.state.contributor);
        alert(this.state.contributorName);
      })
      .catch(response => {
        alert('Could not find user, but pushed up the name of the contributor instread');
        this.state.contributors.push({ name: this.state.contributor })
      });
  };

  handleTags(e) {
    this.state.tags.push(this.state.tag);
    alert(this.state.tags);
  }dir

  fileUpload(e) {
    if (e.target.files.length > 0) {
      const [...files] = e.target.files
      this.setState(prev => ({
        files: [...prev.files, ...files]
      }))
    }
  }

  submitFiles = () => {
    const { files } = this.state;
    const urls = []

    const uploaded = files.map(file => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', CLOUDINARY_API_KEY)
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      formData.append('timestamp', (Date.now() / 1000) | 0)

      return axios
        .post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then(response => urls.push(response.data.secure_url))
    })

    axios.all(uploaded).then(() => {
      //——— Once the files have been uploaded to Cloudinary,
      //do something in the backend with the URL's ——— 
      this.setState(prev => ({ fileUrls: [...prev.fileUrls, ...urls]}),
        () => { console.log("success") });
    });
    const data = {
    projectName: this.state.projectName,
    createdBy: JSON.parse(localStorage.getItem('data')),
    contributors: this.state.contributors,
    description: this.state.description,
    media: this.state.fileUrls,
    github: this.state.githubUrl,
    //lambdaClass: '',
    tags: this.state.tags,
    }
    axios.post('https://lambda-showcase-backend.herokuapp.com/project/create', data)
      .then(response => {
        alert('Project Sent');
      })
      .catch(response => {
        alert('did not work');
      })
  }

  render() {
    return (
      <div className="container">
        <FormGroup>
          <h1>Submit Personal Project</h1>
          {/*<FormControl
            className="input_form"
            placeholder="Lambda Class"
            name="lambdaClass"
            onChange={this.handleChange}
          />*/}
          {/*<FormControl
            className="input_form"
            placeholder="Student Name"
            name="studentName"
            onChange={this.handleChange}
          />*/}
          <FormControl
            className="input_form"
            placeholder="Project Name"
            name="projectName"
            onChange={this.handleChange}
          />
          <FormControl
            className="input_form"
            placeholder="GitHub URL"
            name="githubUrl"
            onChange={this.handleChange}
          />
          <FormControl
            className="input_form"
            placeholder="Contributors: : Must use username or email to add the contributor and must have an account"
            name="contributor"
            onChange={this.handleChange}
          />
          <FormControl
            className="input_form"
            placeholder="Contributors Responsibility"
            name="responsibility"
            onChange={this.handleChange}
          />
          <button onClick={ this.handleContributors }>Press here to add more contributors. PS. This is still a beta form</button>
          <FormControl
            className="input_form"
            placeholder="tags"
            name="tag"
            onChange={this.handleChange}
          />
          <button onClick={ this.handleTags }>Press to add more tags</button>
          <textarea
            className="form-control"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
            rows="3"
            id="formthing"
            style={{ resize: 'none', marginBottom: 10 }}
          />
          <input
            type="file"
            onChange={this.fileUpload}
            style={{ marginBottom: 30 }}
            multiple
          />
          <Link to="/"><button>Exit</button></Link>
          <button onClick={this.submitFiles}>Submit</button>
        </FormGroup>
      </div>
    )
  }
}