// Packages
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components & CSS
import { PrivateRoute } from './Components/privateRoute';
import HomePage from './Components/homePage';
import { NavBar } from './Components';
import { ForgotPassword } from './Components';
import { PasswordToken } from './Components';
import { SubmitProject } from './Components';
import { SignIn } from './Components/signIn';
import { SignUp } from './Components/signUp';
import  Projects  from './Components/Projects';
import { alertActions } from './Actions';
import { history } from './Helpers/history';
import Test from './Components/test';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className="App">
          <Router history={ history }>
            <div>
                <NavBar />
                <PrivateRoute exact path="/" component={ HomePage } />
                {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
                <div className="col-sm-4 col-sm-offset-4" style={{paddingTop: "50px"}}>
                  <Route path='/signUp' component={ SignUp } />
                  <Route path='/signIn' component={ SignIn } />
                  <Route path='/passwordReset' component={ ForgotPassword } />
                  <Route path='/passwordToken' component={ PasswordToken } />
                  <Route path='/submit' component={ SubmitProject } />
                  <Route path='/test' component={ Test } />
                  <Route path='/homePage' component={ HomePage } />
                  <Route path='/Projects' component={ Projects } />
                </div>
            </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };