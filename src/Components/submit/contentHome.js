import React from 'react';
import { Link } from 'react-router-dom';
import './submit.css'

const Content = () => {
  return (
    <div className="text-center">
        <h4> Project Content </h4>
        <p className="text-muted">Click on the sections below and finish them all before moving on to adding a cover.</p>
          <div>
          <div className="row chButtons d-flex justify-content-center">
            <Link className="col-sm-2 text-center" to="/submit/content/desc">
              <strong>Description <br />& Tags</strong>
            </Link>
            <Link className="col-sm-2 text-center" to="/submit/content/contributors">
              <strong>Contributors</strong>
            </Link>
            <Link className="col-sm-2 text-center" to="/submit/content/media">
              <strong>Media</strong>
            </Link>
            <Link className="col-sm-2 text-center" to="/submit/content/cover">
              <strong>Cover</strong>
            </Link>
            <Link className="col-sm-2 text-center" to="/submit/content/final">
              <strong>Submit</strong>
            </Link>
          </div>
          {/*<div className="row btm-btns">
            <div className="clearfix">
              <button className="btn btn-default icon-last">
                Save
                <i className="fa fa-save"></i>
              </button>
              {/*<button className="btn btn-default icon-last">
                Add Cover
                <i className="fa fa-chevron-right"></i>
                </button>
            </div>
              </div>*/}
        </div>
    </div>
  )
}

export default Content