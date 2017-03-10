import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import thunk from 'redux-thunk';
import { loadFromStorage } from './storage/localStorage';

require('../styles/styles.scss');

const storageState = loadFromStorage();

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const storage = createStoreWithMiddleware(reducers, storageState);

ReactDOM.render(
  <Provider store={storage}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));
