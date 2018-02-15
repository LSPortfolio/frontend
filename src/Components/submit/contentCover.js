import React, { Component } from 'react';
import data from './something';
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
      <div>
        <div className="text-center">
        <h4> Cover </h4>
        <p className="text-muted">Upload a cover art for your project.</p>
        </div>
        <div className="d-flex justify-content-center" style={{paddingTop: "25px"}}>
          <form>
            <div className="form-group">
              <input
                type="file"
                onChange={this.fileUpload}
                style={{ marginBottom: 30 }}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContentCover;