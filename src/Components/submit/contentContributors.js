import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

const sampleContributors = [
  {
    name: 'Joram Clervius',
    role: 'Back-end',
    responsibilities: 'Created the database, and the REST API. Helped out with getting the back-end up on heroku'
  },
  {
    name: 'Roland Canuto',
    role: 'Back-end',
    responsibilities: 'Created Schemas for User and project entities. Created back-end logic/controllers for REST API'
  }

]


class Contributors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <Header
          headerText="Manage Contributors"
          helperText="Use this page to add/manage the people who contributed to this project."
        />
        <div className="col-sm-6 col-sm-offset-3">
          <form>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Contributor's email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Role" name="role" />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Describe this contributor's responsibilities in the project" name="responsibility" rows="2"></textarea>              
            </div>
            <div className="clearfix">
              <Link to="/submit" className="btn btn-default icon-first">
                <i className="fa fa-chevron-left"></i>
                Back
              </Link>
              <button className="btn btn-primary pull-right icon-last" type="submit">
                Add Contributor
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="clearfix"></div>
        <hr />
        <div className="col-sm-10 col-sm-offset-1">
          <h4>Current Contributors</h4>
          <div className="row">
            {sampleContributors.map((contributor, i) => {
              return (
                <div className="col-sm-4">
                  
                  <ul className="list-unstyled">
                    <li>
                      <strong>Name:</strong> {contributor.name}
                    </li>
                    <li>
                      <strong>Role:</strong> {contributor.role}
                    </li>
                    <li>
                      <strong>Responsibilities:</strong> {contributor.responsibilities}
                    </li>
                  </ul>
                  <button className="btn btn-sm btn-default icon-last">
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

export default Contributors;