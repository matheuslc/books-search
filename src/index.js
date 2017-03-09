import React from 'react';
import ReactDOM from 'react-dom';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import { loadFromStorage } from './storage/localStorage';

const storageState = loadFromStorage();

const createStoreWithMiddleware = applyMiddleware(
  reduxPromise
)(createStore);

const storage = createStoreWithMiddleware(reducers, storageState);

ReactDOM.render(
  <Provider store={storage}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));
