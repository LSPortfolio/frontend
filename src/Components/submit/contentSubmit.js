import React, { Component } from 'react';
import Header from './Header';
import { FormGroup, FormControl } from 'react-bootstrap';
import data from './something';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './submit.css';



class ContentFinal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(data);
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
      <div className="row">
      <Header
        headerText="About ready to submit :D"
        helperText="Review if you'd like!"
      />
      <div className="col-sm-6 col-sm-offset-3">
      <div>
      {
        data.projectName
      }
      </div>
      <div>
        <img className="media" src={data.media}/>
      </div>
      <div>
        <img className="media" src={data.cover}/>
      </div>
      <div>
        {
          data.description
        }
      </div>
      <div>
        {
          data.tags
        }
      </div>
      <div>
        {
          data.createdBy
        }
      </div>
      <div>
        {
          data.github
        }
      </div>
        <button onClick={this.handleSubmit} className="btn btn-primary pull-right icon-last" type="submit">
          Submit Project
          <i className="fa fa-plus"></i>
        </button>
      </div>
      </div>
    )
  }
}

export default ContentFinal;