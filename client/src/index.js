// We will connect our React Application to our index.html file 

import React from 'react';
import ReactDOM from 'react-dom';

// We will initialise Redux as well 
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers' 

import App from './App';
import './index.css';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,    
     document.getElementById('root'));