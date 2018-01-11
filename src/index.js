import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
            </div>
        </BrowserRouter>
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
