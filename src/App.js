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
import { SignIn } from './Components/signin';
import { SignUp } from './Components/signup';
import Projects from './Components/Projects';
import { alertActions } from './Actions';
//import { FileShare } from '../src/Assets/SocialMedia/fileShare';
import { history } from './Helpers/history';
import Contributors from './Components/Contributors';

import './App.css';
import ProjectDisplay from './Components/projectDisplay';

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
      <Router history={ history }>
        <div className="App">
          <NavBar history={ history } />
          <PrivateRoute exact path="/" component={ HomePage } />
{/* make home page private route after done */}
          <Route path='/homePage' component={ HomePage } />
          <Route path='/Projects' component={ Projects } />
          <Route path="/project/single${id}" component={ProjectDisplay} />
          {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          <div className="col-sm-4 col-sm-offset-4" style={{paddingTop: "50px"}}>
            <Route path='/signUp' component={ SignUp } />
            <Route path='/signIn' component={ SignIn } />
            <Route path='/forgotPassword' component={ ForgotPassword } />
            <Route path='/passwordToken' component={ PasswordToken } />
            {/*<Route path='/share' component={ FileShare } />*/}
            <Route path='/submit' component={ SubmitProject } />
            <Route path='/Contributors' component={ Contributors } />
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };