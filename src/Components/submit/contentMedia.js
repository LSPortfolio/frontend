import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl } from 'react-bootstrap';
import data from './something';
import Header from './Header';
import axios from 'axios';

const CLOUDINARY_UPLOAD_PRESET = 'gisk1vl6'
const CLOUDINARY_CLOUD_NAME = 'dbquvargx'
const CLOUDINARY_API_KEY = '236448318463957'

class ContentMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      fileUrls: [],
      githubUrl: '',
    }
    this.fileUpload = this.fileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  fileUpload(e) {
    if (e.target.files.length > 0) {
      const [...files] = e.target.files
      this.setState(prev => ({
        files: [...prev.files, ...files]
      }))
    }
  }

  handleSubmit() {
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
      this.setState(prev => ({ fileUrls: [...prev.fileUrls, ...urls]}),
        () => { console.log("success") });
    });
    data.githubUrl = this.state.githubUrl;
    data.media = this.state.fileUrls;
  }
 
  render() {
    return (
        <div className="row">
          <Header
            headerText="Media"
            helperText="Upload pictures of your project and github repo."
          />
          <div className="col-sm-6 col-sm-offset-3">
            <FormGroup>
              <FormControl
                className="input_form"
                placeholder="GitHub URL"
                name="githubUrl"
                onChange={this.handleChange}
              />
              <input
                type="file"
                onChange={this.fileUpload}
                style={{ marginBottom: 30 }}
                multiple
              />
              <button onClick={this.handleSubmit} className="btn btn-primary pull-right icon-last" type="submit">
                Add Media
                <i className="fa fa-plus"></i>
              </button>
          </FormGroup>
          </div>
        </div>
      )
    }
}

export default ContentMedia;