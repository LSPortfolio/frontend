import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div className="container row" id="header">
        <header className="col-md-8">
          <div className="navigation">
            <div><img alt="logo" src={ require('../LambdaLogo.png') } /></div>
            <div className="hidden-sm-down"><h1>Lambda Showcase</h1></div>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/submit'>Submit</Link>
          </div>
        </header>
        
      </div>
    );
  }
}

