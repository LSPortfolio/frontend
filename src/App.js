import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Signup from './Components/signup';
import Signin from './Components/signin';
import ForgotPassword from './Components/forgotPassword'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign Up</Link>
        </header>


        //Inital components below for testing purposes; To be deleted

        <Signup />
        <Signin />
        <ForgotPassword />
      </div>
    );
  }
}

export default App;
