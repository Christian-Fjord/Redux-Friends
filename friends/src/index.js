import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';

const store = createStore(
  reducer, 
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider> 
, document.getElementById('root'));