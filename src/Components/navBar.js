import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'

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
        <Button key={1} href="/signIn" className="navbuttons" onClick={logout}>
          SIGN OUT
        </Button>,
        <Button key={2} href="/Submit" className="navbuttons">
          SUBMIT
        </Button>
      ]
    ) : pathname === '/signUp' ? (
      <Button href="/signIn" className="navbuttons">
        SIGN IN
      </Button>
    ) : (
      <Button href="/signUp" className="navbuttons">
        SIGN UP
      </Button>
    )
  }

  render() {
    const { pathname } = this.props.history.location
    return (
      <div className="container-row" id="header">
        <header className="header">
          <div className="navigation">
            <div className="brand">
              <div className="logo">
                <img alt="logo" src={require('../LambdaLogo.png')} />
              </div>
              <div className="hidden-sm-down">
                <p>LAMBDA SHOWCASE</p>
              </div>
            </div>
            <div className="btn_container">
              {this.navSwitcher(pathname)}
              <Button href="/Projects" className="navbuttons">STUDENT PROJECTS</Button>
              <Button href='/Contributors'>CONTRIBUTORS</Button>
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