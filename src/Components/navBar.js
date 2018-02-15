import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { logout } from '../Actions'

class NavBar extends Component {
  constructor() {
    super()
    this.navSwitcher = this.navSwitcher.bind(this)
  }

  navSwitcher(pathname) {
    const { logout } = this.props
    return localStorage.getItem('user') ? (
      [
        <Link key={1} to="/signIn" className="btn btn-light" onClick={logout}>
          SIGN OUT
        </Link>,
        <Link key={2} to="/Submit" className="btn btn-light">
          SUBMIT
        </Link>,
        <Link key={3} to='/settings' className="btn btn-light">
          SETTINGS
        </Link>
      ]
    ) : pathname === '/signUp' ? (<Link to="/signIn" className="btn btn-light">SIGN IN</Link>) : (<Link to="/signUp" className="btn btn-light">SIGN UP</Link>)
  }

  render() {
    const { pathname } = this.props.history.location
    return (
      <div className="container-fuid" id="header">
        <header className="header">
          <div className="navigation">
            <div className="brand">
              <div className="logo">
                <Link to="/"><img alt="logo" src={require('../LambdaLogo.png')} /></Link>
              </div>
              <div className="hidden-sm-down">
                <p>LAMBDA SHOWCASE</p>
              </div>
            </div>
            <div className="btn_container">
              {this.navSwitcher(pathname)}
              <Link to="/Projects" className="btn btn-light">STUDENT PROJECTS</Link>
              <Link to="/Contributors" className="btn btn-light">CONTRIBUTORS</Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) })

const connectedNavBar = connect(mapDispatchToProps)(NavBar)
export { connectedNavBar as NavBar }