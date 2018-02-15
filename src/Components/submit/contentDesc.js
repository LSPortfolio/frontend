import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
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
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ projectName: data.projectName, description: data.description, tags: data.tag })
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
    const tags = this.state.tags;
    data.projectName = this.state.projectName;
    data.description = this.state.description;
    data.tag = tags;
    data.tags = tags.split(',');
  }

  /*handleSubmit() {
  }*/

  render() {
    return (
      <div>
      <div className="text-center">
        <h4>Description</h4>
        <p className="text-muted">All fields below are required. You should add at least one tag.</p>
      </div>
        <div className="d-flex justify-content-center" style={{paddingTop: "25px"}}>
          <form style={{width: "40%"}}>
            <div className="form-group">
              <input 
                className="form-control" 
                type="text" 
                name="projectName" 
                onChange={this.handleChange}
                value={this.state.projectName}
                placeholder="Project Name" />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" 
                rows="3" name="description" 
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="Type project description here..."/>
            </div>
            <div className="form-group">
              <input 
                className="form-control"
                type="text"
                name="tags"
                placeholder="Tags, separate by commas no spaces"
                value={this.state.tags}
                onChange={this.handleChange}/>
            </div>
          </form>
        </div>
    </div>
  )
}
}

export default ContentDesc;