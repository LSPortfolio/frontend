import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Content extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <Header
          headerText="Project Content"
          helperText="Click on the sections below and finish them all before moving on to adding a cover." />
        <div className="col-sm-6 col-sm-offset-3">
          <div className="row chButtons">
            <Link className="col-sm-6 text-center" to="/submit/content/desc">
              <spam></spam>
              <strong>Description <br />& Tags</strong>
            </Link>
            <Link className="col-sm-6 text-center" to="/submit/content/contributors">
              <spam></spam>
              <strong>Contributors</strong>
            </Link>
            <Link className="col-sm-6 text-center" to="/submit/content/desc">
              <spam></spam>
              <strong>Media</strong>
            </Link>
            <Link className="col-sm-6 text-center" to="/submit/content/desc">
              <spam></spam>
              <strong>Link</strong>
            </Link>
          </div>
          <div className="row btm-btns">
            <div className="clearfix text-right">
              <button className="btn btn-default icon-last">
                Save
                <i className="fa fa-save"></i>
              </button>
              <button className="btn btn-default icon-last">
                Add Cover
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content