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
//import { SubmitProject } from './Components';
import { SignIn } from './Components/signin';
import { SignUp } from './Components/signup';
import Projects from './Components/Projects';
import ProjectDisplay from './Components/projectDisplay';
import { alertActions } from './Actions';
// import { FileShare } from '../src/Assets/SocialMedia/fileShare';
import { history } from './Helpers/history';
import Contributors from './Components/Contributors';
import Settings from '../src/Components/settings';

//New Submit!!//
import ContentHome from './Components/submit/contentHome';
import ContentDesc from './Components/submit/contentDesc';
import addContributors from './Components/submit/contentContributors';
import ContentMedia from './Components/submit/contentMedia';
import ContentCover from './Components/submit/contentCover';
import ContentFinal from './Components/submit/contentSubmit';
import './Components/submit/submit.css';

//comment actions and reducers//
import { commentsReducer } from './Reducers/comments.reducer';
import { addComment }  from './Actions/comments.actions';

//=========================//

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
      <Router history={ history }>
        <div>
          <NavBar history={ history } />
          <PrivateRoute exact path="/" component={ HomePage } />
          <PrivateRoute path='/homePage' component={ HomePage } />
          <Route path='/Projects' component={ Projects } />
          <Route path='/project/single:id' component={ ProjectDisplay } />
          {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          <div className="col-sm-12 d-flex justify-content-center" style={{paddingTop: "50px"}}>
            <Route path='/signUp' component={ SignUp } />
            <Route path='/signIn' component={ SignIn } />
            <Route path='/forgotPassword' component={ ForgotPassword } />
            <Route path='/resetPassword' component={ PasswordToken } />
          </div>
            {/*<Route path='/share' component={ FileShare } />*/}
            {/*This is the old submit<Route path='/submit' component={ SubmitProject } />*/}
            {/*This is the new submit*/}
            <div className="col-sm-12">
              <PrivateRoute path="/submit" component={ ContentHome } />
              <div style={{paddingTop: "30px"}}>
                <PrivateRoute path='/submit/content/desc' component={ ContentDesc } />
                <PrivateRoute path='/submit/content/contributors' component={ addContributors } />
                <PrivateRoute path='/submit/content/media' component={ ContentMedia } />
                <PrivateRoute path='/submit/content/cover' component={ ContentCover } />
                <PrivateRoute path='/submit/content/final' component={ ContentFinal } />
                <PrivateRoute path='/settings' component={ Settings } />
              </div>
              {/*================================================*/}
            </div>
            <Route path='/Contributors' component={ Contributors } />
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