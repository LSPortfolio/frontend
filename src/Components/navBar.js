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
                <div style={{marginRight: 65}}>
                  <Button className='navbuttons'><Link to='/signin'>Sign In</Link></Button>            
                  <Button className='navbuttons'><Link to='/signup'>Sign Up</Link></Button>
                  <Button className='navbuttons'><Link to='/submit'>Submit</Link></Button>
                  <Button className='navbuttons'><Link to='/Projects'>Student Projects</Link></Button>
                  <DropdownButton id='dropdown' title="Classes">
                    <DropdownButton className='graduated' title="CS1" id='cs1'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS2" id='cs2'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS3" id='cs3'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS4" id='cs4'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS5" id='cs5'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS6" id='cs6'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="CS7" id='cs7'>
                      <MenuItem>Person 1</MenuItem>
                      <MenuItem>Person 2</MenuItem>
                      <MenuItem>Person 3</MenuItem>
                    </DropdownButton>
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
