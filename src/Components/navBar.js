import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link style={{color: 'white'}} to='/'>Home</Link>
            <Link style={{color: 'white'}} to='/signin'>Sign In</Link>
            <Link style={{color: 'white'}} to='/signup'>Sign Up</Link>
            <Link style={{color: 'white'}} to='/passwordReset'>Forgot Password</Link>
            <Link style={{color: 'white'}} to='/submit'>Submit</Link>
          </div>
          <div>
            <h1 style={{paddingTop: 30}}><i>Lambda Showcase</i></h1>
            <img style={{width: 60, height: 60, backgroundColor: 'dodgerBlue', marginTop: -15}} src={ require('../LambdaLogo.jpg') } />
          </div>
        </header>
      </div>
    );
  }
}

