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

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
            </div>
        </BrowserRouter>
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
