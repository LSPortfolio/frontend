import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import axios from 'axios'

/* ——— Put your own Cloudinary info here for now,
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
      contributors: [],
      description: '',
      files: [],
      fileUrls: [],
      githubUrl: '',
      id: 0,
      lambdaClass: '',
      likes: 0,
      projectName: '',
      studentName: '',
      tags: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.submitFiles = this.submitFiles.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    name === 'lambdaClass'
      ? this.setState({ [name]: value.toUpperCase() })
      : this.setState({ [name]: value })
  }

  fileUpload(e) {
    if (e.target.files.length > 0) {
      const [...files] = e.target.files
      this.setState(prev => ({
        files: [...prev.files, ...files]
      }))
    }
  }

  submitFiles = () => {
    const { files } = this.state
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
      /* ——— Once the files have been uploaded to Cloudinary,
      do something in the backend with the URL's ——— */
      this.setState(prev => ({ fileUrls: [...prev.fileUrls, ...urls]}),
        () => console.log(this.state.fileUrls))
    })
  }

  // personalProjectSubmit() {
  //   const student = this.state.studentName
  //   const lambdaClass = this.state.lambdaClass
  //   const projectName = this.state.projectName
  //   const url = this.state.githubUrl
  //   const likes = this.state.likes
  //   const contributors = this.state.contributors
  //   const tags = this.state.tags
  //   const description = this.state.description
  //   const id = this.state.id

  //   const body = {
  //     student,
  //     lambdaClass,
  //     projectName,
  //     url,
  //     likes,
  //     contributors,
  //     tags,
  //     description,
  //     id
  //   }
  // }

  render() {
    return (
      <div className="container">
        <FormGroup>
          <h1>Submit Your Personal Project</h1>
          <FormControl
            className="input_form"
            placeholder="Lambda Class"
            name="lambdaClass"
            onChange={this.handleChange}
          />
          <FormControl
            className="input_form"
            placeholder="Name"
            name="studentName"
            onChange={this.handleChange}
          />
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
            placeholder="Contributors"
            name="contributors"
            onChange={this.handleChange}
          />
          <FormControl
            className="input_form"
            name="tags"
            onChange={this.handleChange}
          />
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
          <button onClick={this.submitFiles}>Submit</button>
        </FormGroup>
      </div>
    )
  }
}
