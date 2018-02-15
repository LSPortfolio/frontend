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

  componentWillMount() {
    data.contributors.length > 0 ? this.setState({ contributors: data.contributors }) : null;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    if (this.state.contributor && this.state.role && this.state.responsibility) {
      const contributors = this.state.contributors;
      contributors.push({ user: this.state.contributor, role: this.state.role, responsibility: this.state.responsibility });
      this.setState({contributors});
      data.contributors = contributors;
    }
  }

  handleRemove(name) {
    this.setState({ contributors: this.state.contributors.filter(item => item.user !== name)})
    data.contributors = data.contributors.filter(item => item.user !== name);
  }


  render() {
    return (
      <div>
      <div className="text-center">
        <h4> Manage Contributors </h4>
        <p className="text-muted">Use this page to add/manage the people who contributed to this project.</p>
      </div>
        <div className="d-flex justify-content-center" style={{paddingTop: "25px"}}>
          <form style={{width: "40%"}}>
            <div className="form-group">
              <input 
                type="text"
                onChange={this.handleChange}
                name="contributor"
                className="form-control"
                placeholder="Contributor's email"
              />
            </div>
            <div className="form-group">
              <input
                type="text" 
                onChange={this.handleChange} 
                className="form-control" 
                placeholder="Role" 
                name="role" />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" 
                onChange={this.handleChange} 
                placeholder="Describe this contributor's responsibilities in the project" 
                name="responsibility" 
                rows="2"
              />            
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={this.handleSubmit} className="btn btn-primary" type="submit">Add</button>
        </div>        
        {this.state.contributors.length >= 1 ? <h4 className="text-center"><hr/>Current Contributors</h4> : null}
        <div style={{paddingBottom: "50px"}}>
          <div className="row" style={{paddingLeft: "10%", paddingRight: "10%"}}>
            {this.state.contributors.map((contributor, i) => {
              return (
                <div key={i}>
                  <ul className="list-unstyled col-sm-3">
                    <li>
                      <div>
                      <strong>Name:</strong> {contributor.user}
                      </div>
                      <div>
                      <strong>Role:</strong> {contributor.role}
                      </div>
                      <div>
                      <strong>Responsibilities:</strong> {contributor.responsibility}
                      </div>
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

export default Contributors