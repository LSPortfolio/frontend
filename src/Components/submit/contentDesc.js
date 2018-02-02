import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ContentDesc = ({ saveDesc }) => {
  return (
    <div className="row">
      <Header
        headerText="Description"
        helperText="All fields below are required. You should add at least one tag."
      />
      <div className="col-sm-6 col-sm-offset-3">
        <form>
          <div className="form-group">
            <input type="text" name="projectName" placeholder="Project Name" className="form-control" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" name="description" placeholder="Type project description here..."></textarea>
          </div>
          <div className="form-group">
            <input type="text" name="tags" placeholder="Tags, separate by commas" className="form-control"/>
          </div>
          <br/>
          <div className="clearfix">
            <Link to="/submit" className="btn btn-default icon-first pull-left" type="button">
              <i className="fa fa-chevron-left"></i>
              Back
            </Link>
            <button className="btn btn-primary icon-last pull-right" type="submit">
              Save
              <i className="fa fa-save"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContentDesc;