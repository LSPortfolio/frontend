import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'

import { logout } from '../Actions'

const cs1List = [
  'Jiovan Melendez',
  'Antonio Melendez',
  'Sarah Majors',
  'Manisha Lal',
  'Evan Allen',
  'Dan Winslow',
  'Tyge Johnson',
  'Brian Durbin',
  'Jesh Yoon',
  'Latoyya Smith',
  'Jason Campbell',
  'Ely Alamillo',
  'Jake Cooley',
  'Patrick Kennedy'
]

const cs2List = [
  'Joram Clervius',
  'Eric Blancas',
  'Roland Canuto',
  'Tyler Long',
  'Matt Jackson',
  'Adam Lower',
  'Ryan Lowe',
  'Dylan Scheidt'
]

const cs3List = ['Person 1', 'Person 2', 'Person 3']

const cs4List = ['Person 1', 'Person 2', 'Person 3']

const cs5List = ['Person 1', 'Person 2', 'Person 3']

const cs6List = ['Person 1', 'Person 2', 'Person 3']

const cs7List = ['Person 1', 'Person 2', 'Person 3']

const cs8List = ['Person 1', 'Person 2', 'Person 3']

const cs9List = ['Person 1', 'Person 2', 'Person 3']

const cs10List = ['Person 1', 'Person 2', 'Person 3']

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

shuffleArray(cs1List)
shuffleArray(cs2List)

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
              <DropdownButton pullRight title="Classes" id="classes">
                <DropdownButton pullRight className="graduated" title="CS1" id="cs1">
                  <MenuItem style={{ color: 'black' }} to="/cs1">All CS1</MenuItem>
                  {cs1List.map((each, i) => (
                    <MenuItem href={'/cs1' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS2" id="cs2">
                  <MenuItem style={{ color: 'black' }} to="/cs2">All CS2</MenuItem>
                  {cs2List.map((each, i) => (
                    <MenuItem href={'/cs2' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS3" id="cs3">
                  <MenuItem style={{ color: 'black' }} to="/cs3">All CS3</MenuItem>
                  {cs3List.map((each, i) => (
                    <MenuItem href={'/cs3' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS4" id="cs4">
                  <MenuItem style={{ color: 'black' }} to="/cs4">All CS4</MenuItem>
                  {cs4List.map((each, i) => (
                    <MenuItem href={'/cs4' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS5" id="cs5">
                  <MenuItem style={{ color: 'black' }} to="/cs5">All CS5
                  </MenuItem>
                  {cs5List.map((each, i) => (
                    <MenuItem href={'/cs5' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS6" id="cs6">
                  <MenuItem style={{ color: 'black' }} to="/cs6">All CS6</MenuItem>
                  {cs6List.map((each, i) => (
                    <MenuItem href={'/cs6' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS7" id="cs7">
                  <MenuItem style={{ color: 'black' }} to="/cs7">All CS7</MenuItem>
                  {cs7List.map((each, i) => (
                    <MenuItem href={'/cs7' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS8" id="cs8">
                  <MenuItem style={{ color: 'black' }} to="/cs8">All CS7</MenuItem>
                  {cs8List.map((each, i) => (
                    <MenuItem href={'/cs8' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS9" id="cs9">
                  <MenuItem style={{ color: 'black' }} to="/cs9">All CS7</MenuItem>
                  {cs9List.map((each, i) => (
                    <MenuItem href={'/cs9' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
                <DropdownButton pullRight title="CS10" id="cs10">
                  <MenuItem style={{ color: 'black' }} to="/cs10">All CS7</MenuItem>
                  {cs10List.map((each, i) => (
                    <MenuItem href={'/cs10' + each.replace(/\s/, '')} key={i}>
                      {each}
                    </MenuItem>
                  ))}
                </DropdownButton>
              </DropdownButton>
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