import React, { Component } from 'react';
import data from './something';
import Header from './Header';
import axios from 'axios';

const CLOUDINARY_UPLOAD_PRESET = 'gisk1vl6'
const CLOUDINARY_CLOUD_NAME = 'dbquvargx'
const CLOUDINARY_API_KEY = '236448318463957'

class ContentCover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      fileUrls: [],
      githubUrl: '',
    }
    this.fileUpload = this.fileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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
    data.cover = this.state.cover;
  }
 
  render() {
    return (
        <div className="row">
          <Header
            headerText="Cover"
            helperText="Upload a cover thumbnail for your project."
          />
          <div className="col-sm-6 col-sm-offset-3">
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
          </div>
        </div>
      )
    }
}

export default ContentCover;