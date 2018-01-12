import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signin from './Components/signin';
import Signup from './Components/signup';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
import reducer from './Reducers';
import registerServiceWorker from './registerServiceWorker';
import ForgotPassword from './Components/forgotPassword';
import PasswordToken from './Components/passwordToken';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <Route path='/passwordReset' component={ForgotPassword} />
                <Route path='/passwordToken' component={PasswordToken} />
            </div>
        </BrowserRouter>
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
