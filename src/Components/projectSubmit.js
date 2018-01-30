import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
// import ClassNavBar from './classNavBar';
import axios from 'axios';

import cloudinary from 'cloudinary';
import CLOUDINARY_CLOUD_NAME from '../../src/.env';
import CLOUDINARY_API_KEY from '../../src/.env';
import CLOUDINARY_API_SECRET from '../../src/.env';

import fs from 'fs';

cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

let fileToBeUploaded;

// web, mobile, hybrid
// 0    1       2

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
    this.submit = this.submit.bind(this);
    // this.uploadWidget = this.uploadWidget.bind(this);
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

  handleProjectChange(e) {
    this.setState({ projectName: e.target.value });
  }

  handleUrlChange(e) {
    this.setState({ githubUrl: e.target.value });
  }

  handleUploadChange(e) { () => {
    fileToBeUploaded = e.target.files[0];
    let formData = new FormData();
    formData.append('file', fileToBeUploaded);
    formData.append('upload_preset');
  }}

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleContributorsChange(e) {
    this.setState({ contributors: e.target.value });
  }
  
  handleTagsChange(e) {
    this.setState({ tags: e.target.value });
  }

  submit() {
    // let file = this.state.uploadFile;
    // let formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // axios({
    //   url: CLOUDINARY_URL,
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: formData
    // })
    // .then(res => console.log(res))
    // .catch(err => console.log(err));

    // try {  
    //   let data = fs.readFileSync('../norway-3840x2160-5k-4k-wallpaper-fjord-mountains-river-sky-5657', 'utf8');
    //   console.log(data);    
    // } catch(e) {
    //     console.log('Error:', e.stack);
    // }
  
    const STUPID = 'https://wallpapershome.com/images/wallpapers/norway-3840x2160-5k-4k-wallpaper-fjord-mountains-river-sky-5657.jpg';

    cloudinary.uploader.upload(STUPID, (err, result) => {
      console.log(err);
      console.log(result);
    });

    // let content;
    
    // fs.readFile('../norway-3840x2160-5k-4k-wallpaper-fjord-mountains-river-sky-5657', 'utf8', function(err, data) {  
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(data);
    // });

    const uploadWidget = () => {
      cloudinary.openUploadWidget({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET, tags:[this.state.tags]}, function(error, result) {
        console.log(result);
      });
    }

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
          <button onClick={ this.submit }>Submit</button>
        </FormGroup>
      </div>
    )
  }
}
