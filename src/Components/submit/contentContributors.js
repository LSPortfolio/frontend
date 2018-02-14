import React, { Component } from 'react';
import Header from './Header';
import { FormGroup, FormControl } from 'react-bootstrap'
import data from './something';

class Contributors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contributors: [],
      contributor: '',
      role: '',
      responsibilites: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    if (this.state.contributor.length === 0|| this.state.role.length === 0 || this.state.responsibility.length === 0) {
      return
    }
    const contributors = this.state.contributors;
    contributors.push({ user: this.state.contributor, role: this.state.role, responsibility: this.state.responsibility });
    this.setState({contributors});
    data.contributors = contributors;
    console.log(data.contributors);
  }

  handleRemove(name) {
    this.setState({ contributors: this.state.contributors.filter(item => item.user !== name)})
    data.contributors = this.state.contributors;
  }


  render() {
    return (
      <div className="row">
        <Header
          headerText="Manage Contributors"
          helperText="Use this page to add/manage the people who contributed to this project."
        />
        <div className="col-sm-6 col-sm-offset-3">
          <FormGroup>
            <div className="form-group">
              <FormControl type="email" onChange={this.handleChange} name="contributor" className="form-control" placeholder="Contributor's email" />
            </div>
            <div className="form-group">
              <FormControl type="text" onChange={this.handleChange} className="form-control" placeholder="Role" name="role" />
            </div>
            <div className="form-group">
              <textarea className="form-control" onChange={this.handleChange} placeholder="Describe this contributor's responsibilities in the project" name="responsibility" rows="2"></textarea>              
            </div>
          </FormGroup>
            <div className="clearfix">
              <button onClick={this.handleSubmit} className="btn btn-primary pull-right icon-last" type="submit">
                Add Contributor
                <i className="fa fa-plus"></i>
              </button>
            </div>
        </div>
        <div className="clearfix"></div>
        <hr />
        <div className="col-sm-10 col-sm-offset-1">
          {this.state.contributors.length >= 1 ? <h4>Current Contributors</h4> : null}
          <div className="row">
            {/*<UsersPushed list={this.state.contributors}/>*/}
            {this.state.contributors.map((contributor, i) => {
              return (
                <div key={i} className="col-sm-4">
                  <ul className="list-unstyled">
                    <li>
                      <strong>Name:</strong> {contributor.user}
                    </li>
                    <li>
                      <strong>Role:</strong> {contributor.role}
                    </li>
                    <li>
                      <strong>Responsibilities:</strong> {contributor.responsibility}
                    </li>
                  </ul>
                  <button onClick={()=> this.handleRemove(contributor.user)} className="btn btn-sm btn-default icon-last">
                    Remove
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              )
            })}
          </div>
        </div>        
      </div>
    )
  }
}
/*
class UsersPushed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        this.props.list.map((contributor, i) => {
          return (
            <div key={i} className="col-sm-4">             
              <ul className="list-unstyled">
                <li>
                  <strong>Name:</strong> {contributor.user}
                </li>
                <li>
                  <strong>Role:</strong> {contributor.role}
                </li>
                <li>
                  <strong>Responsibilities:</strong> {contributor.responsibility}
                </li>
              </ul>
              <button onClick={()=> this.handleRemove} className="btn btn-sm btn-default icon-last">
                Remove
                <i className="fa fa-trash"></i>
              </button>
            </div>
          )
      })
    )
  }
}
*/
export default Contributors