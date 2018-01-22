import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import '../App.css';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <div style={{backgroundColor: 'dodgerBlue'}} className="container-row" id="header">
            <header style={{ width: "100%" }}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="navigation">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginLeft: 5, marginRight: 10}}><img alt="logo" src={ require('../LambdaLogo.png') } /></div>
                  <div className="hidden-sm-down"><h1>Lambda Showcase</h1></div>
                </div>
                <div style={{marginRight: 25}}>
                  <Button className='navbuttons'><Link to='/signin'>Sign In</Link></Button>            
                  <Button className='navbuttons'><Link to='/signup'>Sign Up</Link></Button>
                  <Button className='navbuttons'><Link to='/submit'>Submit</Link></Button>
                  <Button className='navbuttons'><Link to='/Projects'>Sudent Projects</Link></Button>
                  <DropdownButton title="classes">
                    <MenuItem>CS1</MenuItem>
                    <MenuItem>CS2</MenuItem>
                    <MenuItem>CS3</MenuItem>
                   <MenuItem >CS4</MenuItem>
                   <MenuItem>CS5</MenuItem>
                   <MenuItem>CS6</MenuItem>
                   <MenuItem>CS7</MenuItem>
                </DropdownButton>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
