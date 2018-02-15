import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import data from './something';
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
      github: '',
    }
    this.fileUpload = this.fileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    
  }

  componentDidMount() {
    this.setState({ github: data.github, fileUrls: data.media });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    data.github = this.state.github;
  }

  fileUpload(e) {
    const urls = []
    if (e.target.files.length > 0) {
      const [...files] = e.target.files
      this.setState(prev => ({
        files: [...prev.files, ...files]
      }))
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
          () => { data.media.push(urls) });
      });
      
    }
  }

  handleRemove(file) {
    this.setState({ fileUrls: this.state.fileUrls.filter(data => data !== file )})
    data.media = data.media.filter(data => data !== file);
    axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/<resource_type>/destroy`)
  }
 
  render() {
    return (
      <div>
        <div className="text-center">
        <h4> Media </h4>
        <p className="text-muted">Upload pictures of your project and github repo.</p>
        </div>
        <div className="d-flex justify-content-center" style={{paddingTop: "25px"}}>
          <form style={{width: "40%"}}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="GitHub URL"
                name="github"
                onChange={this.handleChange}
                value={this.state.github}
              />
            </div>
            <div className="form-group">
              <input
                id="file-1"
                type="file"
                onChange={this.fileUpload}
                style={{ width: "0.1px", height: "0.1px", overflow: "hidden", opacity: "0", zindex: "-1" }}
              />
              <label htmlFor="file-1" className="btn btn-primary">
                Select Photo
              </label>
            </div>
          </form>
        </div>
        {this.state.fileUrls.length >= 1 ? <hr/> : null}
        <div className="d-flex justify-content-center" style={{paddingBottom: "25px"}}>
          <div className="row d-flex justify-content-start" style={{paddingLeft: "10%", paddingRight: "10%"}}>
            {this.state.fileUrls.map((file, i) => {
              return (
                <div key={i}>
                  <ul className="list-unstyled">
                    <li>
                      <div>
                        <button onClick={()=> this.handleRemove(file)} className="container btn-link">
                          <img src={file} style={{width: "250px", height: "200px"}}/>
                            <div className="overlay">
                              <div className="text">Delete Me</div>
                          </div>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>    
      </div>
    )
    
  }
}

export default ContentMedia;