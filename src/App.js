import React, { Component } from 'react';
import './App.css';
import Signup from './Components/signup';
import Signin from './Components/signin';
import ForgotPassword from './Components/forgotPassword'
import { FormControl, FormGroup } from 'react-bootstrap';
import NavbarLambda from './Components/navbarLambda'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column'}}>
          <div>
            <NavbarLambda />
            <h1 style={{paddingTop: 0}}><i>Lambda Showcase</i></h1>
            <img style={{width: 60, height: 60, backgroundColor: 'dodgerBlue'}} src={ require('./LambdaLogo.jpg') } />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
