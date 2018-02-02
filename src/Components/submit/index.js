import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import ContentHome from './contentHome'
import ContentDesc from './contentDesc'
import Contributors from './contentContributors'
import './submit.css';

class Submit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pathname } = this.props.location
    return (
      <div className="container container-small">
        <h3>
          <span>Add Project</span>
        </h3>
        <br />
        <nav className="submitTopNav">
          <ul className="list-inline">
            <li>
              <Link to="/submit/" className={(pathname === '/Submit' || pathname.includes('content')) ? 'active' : ''}>1. Content</Link>
            </li>
            <li>
              <Link to="/submit/cover" className={pathname.includes('cover') ? 'active' : ''}>2. Cover</Link>
            </li>
            <li>
              <Link to="/submit/review" className={pathname.includes('review') ? 'active' : ''}>3. Review & Submit</Link>
            </li>
          </ul>
        </nav>
        <div className="submitWrapper">
          <Route path="/submit/" exact component={ ContentHome } />
          <Route path='/submit/content/desc' component={ ContentDesc } />
          <Route path='/submit/content/contributors' component={ Contributors } />
          <Route path="/submit/cover" component={ ContentHome } />
          <Route path="/submit/review" component={ ContentHome } />
        </div>
      </div>
    )
  }
}

export default Submit