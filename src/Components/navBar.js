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
                  <Button className='navbuttons'><Link to='/Projects'>Student Projects</Link></Button>
                  <DropdownButton id='dropdown' title="classes">
                    <MenuItem id='cs1'>CS1</MenuItem>
                    <MenuItem id='cs2'>CS2</MenuItem>
                    <MenuItem id='cs3'>CS3</MenuItem>
                    <MenuItem id='cs4'>CS4</MenuItem>
                    <MenuItem id='cs5'>CS5</MenuItem>
                    <MenuItem id='cs6'>CS6</MenuItem>
                    <MenuItem id='cs7'>CS7</MenuItem>
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
