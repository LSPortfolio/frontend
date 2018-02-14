import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import Header from './Header';
import data from './something';

class ContentDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      description: '',
      tags: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const tags = this.state.tags.split(',');
    data.projectName = this.state.projectName;
    data.description = this.state.description;
    data.tags = tags;
    console.log(data);
  }

  render() {
    return (
      <div className="row">
        <Header
          headerText="Description"
          helperText="All fields below are required. You should add at least one tag."
        />
        <div className="col-sm-6 col-sm-offset-3">
          <FormGroup>
            <div className="form-group">
              <FormControl type="text" name="projectName" onChange={this.handleChange} placeholder="Project Name" className="form-control" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="3" name="description" onChange={this.handleChange} placeholder="Type project description here..."></textarea>
            </div>
            <div className="form-group">
              <input type="text" name="tags" placeholder="Tags, separate by commas" onChange={this.handleChange} className="form-control"/>
            </div>
          </FormGroup>
            <div className="clearfix">
              <button className="btn btn-primary icon-last pull-right" onClick={this.handleSubmit} type="submit">
                Add
              </button>
            </div>
        </div>
      </div>
  )
}
}

export default ContentDesc;