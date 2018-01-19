import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

import '../App.css';

export class NavBar extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'dodgerBlue'}} className="container-row" id="header">
        <header className="col-md-8">
          <div className="navigation">
            <div><img alt="logo" src={ require('../LambdaLogo.png') } /></div>
            <div className="hidden-sm-down"><h1>Lambda Showcase</h1></div>
              <Button className='navbuttons'><Link to='/signin'>Sign In</Link></Button>            
              <Button className='navbuttons'><Link to='/signup'>Sign Up</Link></Button>
              <Button className='navbuttons'><Link to='/submit'>Submit</Link></Button>
          </div>
        </header>
        
      </div>
    );
  }
}

